const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const app = express();
const port = 5000;
const fs = require("fs");
const path = require("path");

app.use(express.json());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, DELETE, PATCH, PUT, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.static("upload"));

mongoose
  .connect("mongodb://localhost:27017/clgTest")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define Schema
const studentinfo = new mongoose.Schema({
  prn: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  parentphone: { type: String, required: true },
  DOB: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  linkedin: { type: String, required: true },
  adharnum: { type: String, required: true },
  resumelink: { type: String, required: true },
  img: { type: String, required: true },
});

const studinfo = mongoose.model("Studentinfo", studentinfo);
//multer
let imgName;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    console.log(req.body);

    imgName = `${file.originalname}`;
    console.log(imgName);
    cb(null, imgName);
  },
});
const upload = multer({ storage });

app.post("/uploadCreate", upload.single("img"), async (req, res) => {
  // console.log(req.body);
  return res.send("uploaded");
});

app.post("/upload", upload.single("img"), async (req, res) => {
  try {
    const prn = req.body.prn; //
    const imgExtension = req.file.originalname.split(".").pop();
    const imgName = `${prn}.${imgExtension}`;
    const oldImgPath = `./upload/${prn}`;
    if (fs.existsSync(oldImgPath)) {
      fs.unlinkSync(oldImgPath);
    }

    fs.renameSync(req.file.path, `./upload/${imgName}`);

    res.send("uploaded");
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).send("Error uploading image");
  }
});

app.get("/getAllImageUrls", async (req, res) => {
  try {
    const uploadDir = "./upload";
    const files = fs.readdirSync(uploadDir);
    const imageUrls = {};

    files.forEach((filename) => {
      const extension = path.extname(filename); // Get the file extension
      const nameWithoutExtension = path.basename(filename, extension);
      const imageUrl = {
        filename: nameWithoutExtension,
        extension: extension.slice(1),
      };

      imageUrls[nameWithoutExtension] = imageUrl;

      console.log(
        `Filename: ${filename}, Filename without extension: ${nameWithoutExtension}, Extension: ${extension}`
      );
    });

    res.status(200).json(imageUrls);
  } catch (error) {
    console.error("Error retrieving image URLs:", error);
    res.status(500).send("Error retrieving image URLs");
  }
});

// CRUD Oper
app.post("/studinfo", async (req, res) => {
  try {
    await studinfo.create({
      prn: req.body.prn,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      parentphone: req.body.parentphone,
      DOB: req.body.DOB,
      gender: req.body.gender || "male",
      email: req.body.email,
      linkedin: req.body.linkedin,
      adharnum: req.body.adharnum,
      resumelink: req.body.resumelink,
      img: req.body.img,
    });
    res.status(201).send("added data");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

app.get("/studinfo", async (req, res) => {
  try {
    const students = await studinfo.find({});
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/studinfo/:prn", async (req, res) => {
  try {
    const prn = req.params.prn;
    const student = await studinfo.findOne({ prn: prn });
    if (!student) {
      return res.status(404).send();
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/studinfo/:prn", async (req, res) => {
  try {
    const prn = req.params.prn;
    const updates = req.body;
    const student = await studinfo.findOneAndUpdate({ prn: prn }, updates, {
      new: true,
    });
    if (!student) {
      return res.status(404).send();
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/studinfo/:prn", async (req, res) => {
  try {
    const prn = req.params.prn;
    const student = await studinfo.findOneAndDelete({ prn: prn });
    if (!student) {
      return res.status(404).send();
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/studinfo/bulk", async (req, res) => {
  try {
    const students = req.body; // Assuming req.body is an array of student objects
    const result = await StudentAcd.insertMany(students);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});
//from another module

// Define Schema
const StudentAcdSchema = new mongoose.Schema({
  prn: { type: Number, required: true, unique: true },
  rollnum: { type: Number, required: true },

  name: { type: String, required: true },
  ssc: { type: Number, required: true },
  Hsc: { type: Number, required: true },
  semwise: [Number],
  cgpa: { type: Number },
  // year: { type: String, required: true },
  // branch: { type: String, required: true },
  backsubjects: [String],

  idcard: {
    // Object type field
    idname: String,
    idaddress: String,
    idDOB: String,
    idmobile: String,
    idparentmobile: String,
  },
});

// Define Model
const StudentAcd = mongoose.model("StudentAcd", StudentAcdSchema);

app.post("/studentsAc", async (req, res) => {
  try {
    const {
      prn,
      rollnum,
      name,
      ssc,
      Hsc,
      semwise,
      cgpa,

      backsubjects,
      idcard,
    } = req.body;

    const result = await StudentAcd.create({
      prn,
      rollnum,
      name,
      ssc,
      Hsc,
      semwise,
      cgpa,

      backsubjects,
      idcard,
    });

    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

app.get("/studentsAc", async (req, res) => {
  try {
    const students = await StudentAcd.find({});
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/studentsAc/:prn", async (req, res) => {
  try {
    const prn = req.params.prn;
    const student = await StudentAcd.findOne({ prn: prn });
    if (!student) {
      return res.status(404).send();
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/studentsAc/:prn", async (req, res) => {
  try {
    const prn = req.params.prn;
    const updates = req.body;
    const student = await StudentAcd.findOneAndUpdate({ prn: prn }, updates, {
      new: true,
    });
    if (!student) {
      return res.status(404).send();
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/studentsAc/:prn", async (req, res) => {
  try {
    const prn = req.params.prn;
    const student = await StudentAcd.findOneAndDelete({ prn: prn });
    if (!student) {
      return res.status(404).send();
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/studentsAc/bulk", async (req, res) => {
  try {
    const students = req.body; // Assuming req.body is an array of student objects
    const result = await StudentAcd.insertMany(students);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

//fees module

// Define Schema
const studentSchema = new mongoose.Schema({
  prn: { type: Number, required: true, unique: true }, // Set prn field as unique
  name: { type: String, required: true },
  year: { type: String, required: true },
  branch: { type: String, required: true },
  category: { type: String, required: true },
  scholarships: [String],
  actualfee: { type: Number },
  totalfee: { type: Number },
  remaining: { type: Number },
});

// Define Model
const Student = mongoose.model("Student", studentSchema);

// CRUD Operations

app.put("/updateFee/:prn", async (req, res) => {
  try {
    const { newFee } = req.body;

    // Find the student by PRN
    const student = await Student.findOne({ prn: req.params.prn });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Calculate remaining fee after subtracting the new fee
    const remainingFee = student.remaining - newFee;

    // Update the remaining fee in the student object
    student.remaining = remainingFee;

    // Save the updated student to the database
    await student.save();

    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});
app.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, category, scholarships, year } = req.body;

    // Calculate total fee based on category and scholarship
    let totalfee = 70000; // Initial fee

    // Calculate category discount
    let categoryDiscount = 0;
    switch (category) {
      case "obc":
        categoryDiscount = 40000;
        break;
      case "sc":
        categoryDiscount = 45000;
        break;
      case "nt":
        categoryDiscount = 47000;
        break;
      default:
        break;
    }

    switch (year) {
      case "fy":
        totalfee += 2000;
        break;
      case "sy":
        totalfee += 1000;
        break;
      case "ty":
        totalfee += 500;
        break;
      case "ly":
        totalfee += 0;
        break;
      default:
        break;
    }

    // Calculate scholarship discount
    let scholarshipDiscount = 0;
    for (let scholarship of scholarships) {
      switch (scholarship) {
        case "ebc":
          scholarshipDiscount += 35000;
          break;
        case "obc1":
          scholarshipDiscount += 10000;
          break;
        case "obc2":
          scholarshipDiscount += 12000;
          break;
        case "sc1":
          scholarshipDiscount += 3000;
          break;
        case "sc2":
          scholarshipDiscount += 5000;
          break;
        case "nt1":
          scholarshipDiscount += 2000;
          break;
        case "nt2":
          scholarshipDiscount += 2500;
          break;
        default:
          break;
      }
    }

    // Update total fee
    totalfee -= categoryDiscount;
    totalfee -= scholarshipDiscount;

    // Create student object
    const student = new Student({
      ...req.body,
      actualfee: 70000,
      totalfee,
      remaining: totalfee,
    });

    // Save student to database
    await student.save();

    res.status(201).json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/:prn", async (req, res) => {
  try {
    const student = await Student.findOne({ prn: req.params.prn });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.put("/:prn", async (req, res) => {
  try {
    const { category, scholarships, year } = req.body;

    const student = await Student.findOne({ prn: req.params.prn });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    let totalfee = 70000;

    let categoryDiscount = 0;
    switch (category) {
      case "obc":
        categoryDiscount = 40000;
        break;
      case "sc":
        categoryDiscount = 45000;
        break;
      case "nt":
        categoryDiscount = 47000;
        break;
      default:
        break;
    }

    switch (year) {
      case "First":
        totalfee += 2000;
        break;
      case "Second":
        totalfee += 1000;
        break;
      case "Third":
        totalfee += 500;
        break;
      case "Fourth":
        totalfee += 0;
        break;
      default:
        break;
    }

    let scholarshipDiscount = 0;
    for (let scholarship of scholarships) {
      switch (scholarship) {
        case "ebc":
          scholarshipDiscount += 35000;
          break;
        case "obc1":
          scholarshipDiscount += 10000;
          break;
        case "obc2":
          scholarshipDiscount += 12000;
          break;
        case "sc1":
          scholarshipDiscount += 3000;
          break;
        case "sc2":
          scholarshipDiscount += 5000;
          break;
        case "nt1":
          scholarshipDiscount += 2000;
          break;
        case "nt2":
          scholarshipDiscount += 2500;
          break;
        default:
          break;
      }
    }

    totalfee -= categoryDiscount;
    totalfee -= scholarshipDiscount;

    student.set({
      ...req.body,
      totalfee,
      remaining: totalfee,
    });

    await student.save();

    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.delete("/:prn", async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ prn: req.params.prn });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Start Express Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
