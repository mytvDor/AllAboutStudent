// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllStudentData } from "./student";
// import "./new.css";

// const StudentDataComponent = () => {
//   const dispatch = useDispatch();
//   const { students, loading, error } = useSelector((state) => state.student);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchField, setSearchField] = useState(""); // Default search field is empty

//   useEffect(() => {
//     dispatch(fetchAllStudentData());
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const filteredStudents = Object.values(students).filter((student) => {
//     const fieldValue = student[searchField];
//     if (fieldValue !== undefined && fieldValue !== null) {
//       return fieldValue
//         .toString()
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());
//     }
//     return false;
//   });

//   // Function to handle input type based on selected field
//   const handleInputType = (field) => {
//     switch (field) {
//       case "DOB":
//         return "date";
//       case "phone":
//       case "parentphone":
//         return "tel";
//       default:
//         return "text";
//     }
//   };

//   return (
//     <div className="student-list">
//       <div className="search-container">
//         <input
//           type={handleInputType(searchField)}
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <select
//           value={searchField}
//           onChange={(e) => setSearchField(e.target.value)}
//         >
//           <option value="">Select Field</option>
//           <option value="name">Name</option>
//           <option value="prn">PRN</option>
//           <option value="address">Address</option>
//           <option value="phone">Phone</option>
//           <option value="parentphone">Parent Phone</option>
//           <option value="DOB">DOB</option>
//           <option value="gender">Gender</option>
//           <option value="email">Email</option>
//           <option value="linkedin">LinkedIn</option>
//           <option value="adharnum">Adhar Number</option>
//           <option value="resumelink">Resume Link</option>
//           <option value="rollnum">Roll Number</option>
//           <option value="ssc">SSC</option>
//           <option value="Hsc">HSC</option>
//           <option value="semwise">Semester-wise</option>
//           <option value="cgpa">CGPA</option>
//           <option value="backsubjects">Back Subjects</option>
//           <option value="year">Year</option>
//           <option value="branch">Branch</option>
//           <option value="category">Category</option>
//           <option value="scholarships">Scholarships</option>
//           <option value="actualfee">Actual Fee</option>
//           <option value="totalfee">Total Fee</option>
//           <option value="remaining">Remaining</option>
//         </select>
//       </div>
//       {filteredStudents.map((student) => (
//         <div key={student.prn} className="student-card">
//           <p>Name: {student.name}</p>
//           <p>PRN: {student.prn}</p>
//           <p>Address: {student.address}</p>
//           <p>Phone: {student.phone}</p>
//           <p>Parent Phone: {student.parentphone}</p>
//           <p>DOB: {student.DOB}</p>
//           <p>Gender: {student.gender}</p>
//           <p>Email: {student.email}</p>
//           <p>LinkedIn: {student.linkedin}</p>
//           <p>Adhar Number: {student.adharnum}</p>
//           <p>Resume Link: {student.resumelink}</p>
//           <img
//             src={`http://localhost:5000/${student.img}`}
//             alt="Student Image"
//           />
//           <p>Roll Number: {student.rollnum}</p>
//           <p>SSC: {student.ssc}</p>
//           <p>HSC: {student.Hsc}</p>
//           <p>Semester-wise: {student.semwise}</p>
//           <p>CGPA: {student.cgpa}</p>
//           <p>Back Subjects: {student.backsubjects}</p>
//           <p>Year: {student.year}</p>
//           <p>Branch: {student.branch}</p>
//           <p>Category: {student.category}</p>
//           <p>Scholarships: {student.scholarships}</p>
//           <p>Actual Fee: {student.actualfee}</p>
//           <p>Total Fee: {student.totalfee}</p>
//           <p>Remaining: {student.remaining}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StudentDataComponent;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudentData } from "./student";
import "./new.css";
import Navbar from "../Navbar";
import Card from "./Card";
import "./studentdatacomp.css";
const StudentDataComponent = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.student);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("");
  const [checkselecton, setCheckSelection] = useState(false); // Default search field is empty

  useEffect(() => {
    dispatch(fetchAllStudentData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredStudents = Object.values(students).filter((student) => {
    if (searchTerm === "") {
      // Show all data entries if search term is empty
      return true;
    }
    const fieldValue = student[searchField];
    if (fieldValue !== undefined && fieldValue !== null) {
      console.log(fieldValue);
      return fieldValue
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    }
    return false;
  });

  // Function to handle input type based on selected field
  const handleInputType = (field) => {
    switch (field) {
      case "DOB":
        return "date";
      case "phone":
      case "parentphone":
        return "tel";

      case "gender":
        return "radio";
      default:
        return "text";
    }
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="">
        <div className="search-containeri">
          <select
            value={searchField}
            onChange={(e) => {
              setSearchField(e.target.value);
              setSearchTerm("");
              setCheckSelection(true);
            }}
            className="styled-selecti"
          >
            <option value="">Select Field</option>
            <option value="name">Name</option>
            <option value="prn">PRN</option>
            <option value="address">Address</option>
            <option value="phone">Phone</option>
            <option value="parentphone">Parent Phone</option>
            <option value="DOB">DOB</option>
            <option value="gender">Gender</option>
            <option value="email">Email</option>
            <option value="linkedin">LinkedIn</option>
            <option value="adharnum">Adhar Number</option>
            <option value="resumelink">Resume Link</option>
            <option value="rollnum">Roll Number</option>
            <option value="ssc">SSC</option>
            <option value="Hsc">HSC</option>
            <option value="semwise">Semester-wise</option>
            <option value="cgpa">CGPA</option>
            <option value="backsubjects">Back Subjects</option>
            <option value="year">Year</option>
            <option value="branch">Branch</option>
            <option value="category">Category</option>
            <option value="scholarships">Scholarships</option>
            <option value="actualfee">Actual Fee</option>
            <option value="totalfee">Total Fee</option>
            <option value="remaining">Remaining</option>
          </select>
          {checkselecton && (
            <div className="chekselection  ipcheck">
              {" "}
              {searchField == "gender" ? (
                <div>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="m"
                      checked={searchTerm === "m"}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="f"
                      checked={searchTerm === "f"}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    Female
                  </label>
                  {/* Add more radio buttons for other gender options if needed */}
                </div>
              ) : (
                <input
                  type={handleInputType(searchField)}
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="ipi"
                  // style={{ width: "100px" }}
                />
              )}
            </div>
          )}
        </div>
        <Card students={filteredStudents}></Card>
        {/* {filteredStudents.map((student) => (
          <div key={student.prn} className="student-card">
            <p>Name: {student.name}</p>
            // <p>PRN: {student.prn}</p>
            // <p>Address: {student.address}</p>
            // <p>Phone: {student.phone}</p>
            // <p>Parent Phone: {student.parentphone}</p>
            // <p>DOB: {student.DOB}</p>
            // <p>Gender: {student.gender}</p>
            // <p>Email: {student.email}</p>
            // <p>LinkedIn: {student.linkedin}</p>
            // <p>Adhar Number: {student.adharnum}</p>
            // <p>Resume Link: {student.resumelink}</p>
            //{" "}
            <img
              src={`http://localhost:5000/${student.img}`}
              alt="Student Image"
            />
            <p>Roll Number: {student.rollnum}</p>
            <p>SSC: {student.ssc}</p>
            <p>HSC: {student.Hsc}</p>
            <p>Semester-wise: {student.semwise}</p>
            <p>CGPA: {student.cgpa}</p>
            <p>Back Subjects: {student.backsubjects}</p>
            <p>Year: {student.year}</p>
            <p>Branch: {student.branch}</p>
            <p>Category: {student.category}</p>
            <p>Scholarships: {student.scholarships}</p>
            <p>Actual Fee: {student.actualfee}</p>
            <p>Total Fee: {student.totalfee}</p>
            <p>Remaining: {student.remaining}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default StudentDataComponent;
