import React, { useState } from "react";

const SupdateStud = () => {
  const [prn, setPrn] = useState(0);
  const [showImageInput, setShowImageInput] = useState(false); // State to manage image input visibility

  const [fileInput, setFileInput] = useState(null);
  const handleIp = (e) => {
    setFileInput(e.target);
  };
  const [formData, setFormData] = useState({
    prn: "",
    name: "",
    address: "",
    phone: "",
    parentphone: "",
    DOB: "",
    gender: "",
    email: "",
    linkedin: "",
    adharnum: "",
    resumelink: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleprn = (e) => {
    console.log(e.target.value);
    setPrn(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const res = await fetch(`http://localhost:5000/studinfo/${prn}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        console.log("err at res.ok");
      }

      const d = await res.json();

      setFormData({
        prn: d.prn,
        name: d.name,
        address: d.address,
        phone: d.phone,
        parentphone: d.parentphone,
        DOB: d.DOB,
        gender: d.gender,
        email: d.email,
        linkedin: d.linkedin,
        adharnum: d.adharnum,
        resumelink: d.resumelink,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (fileInput && fileInput.files[0]) {
  //     // Delete old photo if exists
  //     try {
  //       // Send a DELETE request to the server to delete the old photo
  //       const deleteResponse = await fetch(
  //         `http://localhost:5000/deletePhoto/${prn}`,
  //         {
  //           method: "DELETE",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       if (!deleteResponse.ok) {
  //         console.log("Failed to delete old photo");
  //       }
  //     } catch (error) {
  //       console.error("Error deleting old photo:", error);
  //     }
  //   }

  //   // Now handle the uploading of the new photo
  //   if (!fileInput || !fileInput.files[0]) {
  //     console.log("No file selected");
  //     return;
  //   }
  //   const imgData = new FormData();
  //   imgData.append("img", fileInput.files[0]);
  //   try {
  //     const response = await fetch("http://localhost:5000/upload", {
  //       method: "POST",
  //       body: imgData,
  //     });
  //     if (response.ok) {
  //       console.log("New photo uploaded successfully");
  //       // Reset form data if needed
  //     } else {
  //       console.error("Failed to upload new photo");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading new photo:", error);
  //   }
  //   //db data
  //   try {
  //     const resp = await fetch(`http://localhost:5000/studinfo/${prn}`, {
  //       method: "PATCH",
  //       headers: {
  //         content: "application/json",
  //       },
  //     });

  //     if (!resp.ok) {
  //       console.log("something went wrong at resp.ok");
  //     } else {
  //       const data = await resp.json();
  //       console.log(data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Now handle the uploading of the new photo
    if (!fileInput || !fileInput.files[0]) {
      console.log("No file selected");
    } else {
      const imgData = new FormData();
      imgData.append("img", fileInput.files[0]);
      imgData.append("prn", formData.prn); // Include PRN number in the FormData

      try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: imgData,
        });
        if (!response.ok) {
          console.error("Failed to upload new photo");
          return;
        }
      } catch (error) {
        // Now handle the patch request to update student information
        // const patchResponse = await fetch(
        //   `http://localhost:5000/studinfo/${formData.prn}`,
        //   {
        //     method: "PATCH",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formData), // Send updated student information
        //   }
        // );

        // if (!patchResponse.ok) {
        //   console.error("Failed to update student information");
        //   return;
        // }

        // console.log(
        //   "New photo uploaded and student information updated successfully"
        // );

        // setFormData({
        //   prn: "",
        //   name: "",
        //   address: "",
        //   phone: "",
        //   parentphone: "",
        //   DOB: "",
        //   gender: "",
        //   email: "",
        //   linkedin: "",
        //   adharnum: "",
        //   resumelink: "",
        //   img: "",
        // });
        // // Reset file input
        // setFileInput(null);
        // // Show alert
        // alert("Form submitted successfully!");
        console.error("Error:", error);
      }
    }
    try {
      const patchResponse = await fetch(
        `http://localhost:5000/studinfo/${formData.prn}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send updated student information
        }
      );

      if (!patchResponse.ok) {
        console.error("Failed to update student information");
        return;
      }

      console.log(
        "New photo uploaded and student information updated successfully"
      );

      setFormData({
        prn: "",
        name: "",
        address: "",
        phone: "",
        parentphone: "",
        DOB: "",
        gender: "",
        email: "",
        linkedin: "",
        adharnum: "",
        resumelink: "",
        img: "",
      });
      // Reset file input
      setFileInput(null);
      // Show alert
      alert("Form submitted successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>search prn no.</h2>
      <input type="text" onChange={(e) => handleprn(e)} />

      <button onClick={handleSearch}>click me</button>

      <div className="form">
        <div className="container">
          <h2>User Registration Form</h2>
          {/* <form
          id="userForm"
          action="/upload"
          method="POST"
          onSubmit={handleSubmit}
        > */}
          <form
            id="userForm"
            action="/upload"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="prn">PRN:</label>
              <input
                type="number"
                id="prn"
                name="prn"
                value={formData.prn}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentphone">Parent's Phone:</label>
              <input
                type="text"
                id="parentphone"
                name="parentphone"
                required
                value={formData.parentphone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="DOB">Date of Birth:</label>
              <input
                type="date"
                id="DOB"
                name="DOB"
                required
                value={formData.DOB}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedin">LinkedIn:</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                required
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="adharnum">Aadhar Number:</label>
              <input
                type="text"
                id="adharnum"
                name="adharnum"
                required
                value={formData.adharnum}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="resumelink">Resume Link:</label>
              <input
                type="url"
                id="resumelink"
                name="resumelink"
                required
                value={formData.resumelink}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="changeImage"
                checked={showImageInput}
                onChange={() => setShowImageInput(!showImageInput)}
              />
              <label htmlFor="changeImage">Change Profile Image</label>
            </div>

            {/* Image input */}
            {showImageInput && (
              <div className="form-group">
                <label htmlFor="img">
                  Profile Image (only if you want to change):
                </label>
                <input type="file" id="img" name="img" onChange={handleIp} />
              </div>
            )}
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupdateStud;
