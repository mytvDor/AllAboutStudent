import React from "react";
import "./Card.css";
const Card = ({ students }) => {
  console.log(students);
  return (
    <div
      className="parent"
      style={{
        // backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        // flexDirection: "column",
        // margin: "20%",
        // border: "2px solid red",
      }}
    >
      {students.map((student) => (
        <div className="main" key={student.prn}>
          <div className="profile">
            <div className="pimg">
              {" "}
              <div className="profimg">
                {" "}
                <img
                  src={`http://localhost:5000/${student.img}`}
                  alt="Student Image"
                />
              </div>
            </div>{" "}
            <div className="subprofile">
              <div className="name">{student.name}</div>
              <div className="yearbrnch">
                <div className="year">
                  <h3>YEAR</h3>
                  <p>{student.year}</p>
                </div>
                <div className="branch">
                  <h3>BRANCH</h3>
                  <p>{student.branch}</p>
                </div>
              </div>
              <div className="links">
                <div className="resume">
                  <a href={`${student.resumelink}}`}>
                    <img src="./cv.jpg" />{" "}
                  </a>
                </div>
                <div className="linkdin">
                  <a href={`${student.linkedin}`}>
                    <img src="./linkedin.jpg" />{" "}
                  </a>
                </div>
                <div className="email">
                  <a href={`mailto:sumitdhonde0@gmail.com`}>
                    <img src="./email.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="row">
              <div className="prn">
                {" "}
                <h3>PRN NUM</h3>
                {student.prn}
              </div>
              <div className="rollnum">
                {" "}
                <h3>ROLL NUM</h3> {student.rollnum}
              </div>

              <div className="adharnum">
                {" "}
                <h3>AADHAR NUM</h3> {student.adharnum}
              </div>
            </div>
            <div className="addrs">
              {" "}
              <h3>ADDRESS</h3>
              {student.address}
            </div>
            <div className="row">
              <div className="phone">
                <h3>PHONE</h3> 1234567890
              </div>
              <div className="parent-phone">
                {" "}
                <h3>PARENT PHONE</h3> {student.parentphone}
              </div>
            </div>
            <div className="row">
              <div className="dob">
                {" "}
                <h3>DOB</h3>
                {student.DOB}
              </div>
              <div className="gender">
                {" "}
                <h3>GENDER</h3>
                {student.gender}
              </div>
              <div className="category">
                {" "}
                <h3>CATEGORY</h3>
                {student.category}
              </div>
            </div>
            <div className="fees ">
              <div className="row">
                {" "}
                <div className="actual">
                  {" "}
                  <h3>ACTUAL FEE</h3> {student.actualfee}
                </div>
                <div className="paid">
                  {" "}
                  <h3>SCOLERSHIP </h3> {/* <div className="progress-bar"> */}
                  {student.scholarships}
                  {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
              <div className="total">
                {" "}
                <h3>BY APPLYING SCHOLERSHIP TOTAL FEE</h3>{" "}
                <div className="progress-bar">
                  <div
                    className="fill"
                    style={{
                      width: `${25}  %`,
                      backgroundColor: " #751aff",

                      color: "white",
                    }}
                  >
                    {student.totalfee}
                  </div>
                </div>
              </div>

              <div className="remaining">
                {" "}
                <h3>REMAINING FEE</h3> Rs.{student.remaining}
                <div className="progress-bar">
                  <div
                    className="fill"
                    style={{
                      width: `${(student.remaining / student.totalfee) * 100}%`,
                      backgroundColor: " #751aff",
                      color: "white",
                    }}
                  >
                    {(student.remaining / student.totalfee) * 100}%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="acds">
            <div className="marks">
              <div className="cgpa">
                {" "}
                <h3>CGPA</h3>{" "}
                <div className="progress-bar">
                  <div
                    className="fill"
                    style={{
                      width: `${student.cgpa * 10}px`,
                      backgroundColor: " #751aff",
                      color: "white",
                    }}
                  >
                    {student.cgpa}
                  </div>
                </div>
              </div>
              <div className="hsc">
                {" "}
                <h3>HSC MARKS</h3>
                <div className="progress-bar">
                  <div
                    className="fill"
                    style={{
                      width: `${student.ssc}px`,
                      backgroundColor: " #751aff",
                      color: "white",
                    }}
                  >
                    {student.Hsc} %
                  </div>
                </div>
              </div>
              <div className="ssc">
                {" "}
                <h3>SSC MARKS</h3>{" "}
                <div className="progress-bar">
                  <div
                    className="fill"
                    style={{
                      width: `${student.ssc}px`,
                      backgroundColor: " #751aff",
                      color: "white",
                    }}
                  >
                    {student.ssc} %
                  </div>
                </div>
              </div>
            </div>
            <div className="semwise">
              {" "}
              <h3>SEMWISE</h3>
              {student.semwise.map((marks, index) => (
                <div key={index}>
                  {" "}
                  {index + 1}
                  <div
                    className="progress-bar"
                    style={{
                      width: "80  %",
                      margin: "5px",
                    }}
                  >
                    <div
                      className="fill"
                      style={{
                        width: `${marks}px`,
                        backgroundColor: " #751aff",
                        color: "white",
                      }}
                    >
                      {marks} %
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="backloks">
              <h3>BACKLOCKS</h3>
              {student.backsubjects.length}

              <div className="progress-bar">
                <div
                  className="fill"
                  style={{
                    width: `${student.backsubjects.length * 10}%`,
                    backgroundColor: "red",
                  }}
                >
                  {" "}
                  {student.backsubjects.length}
                  {/* //#11009e, #4942e4 ,#e6b9de ,#fae7f3 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

// <div key={student.prn} className="student-card">
//                   {/* Render student information */}
//                   <p>Name: {student.name}</p>
//                   <p>PRN: {student.prn}</p>
//                   <p>Address: {student.address}</p>
//                   <p>Phone: {student.phone}</p>
//                   <p>Parent Phone: {student.parentphone}</p>
//                   <p>DOB: {student.DOB}</p>
//                   <p>Gender: {student.gender}</p>
//                   <p>Email: {student.email}</p>
//                   <p>LinkedIn: {student.linkedin}</p>
//                   <p>Adhar Number: {student.adharnum}</p>
//                   <p>Resume Link: {student.resumelink}</p>{" "}
//                   <img
//                     src={`http://localhost:5000/${student.img}`}
//                     alt="Student Image"
//                   />
//                   <p>Roll Number: {student.rollnum}</p>
//                   <p>SSC: {student.ssc}</p>
//                   <p>HSC: {student.Hsc}</p>
//                   <p>Semester-wise: {student.semwise}</p>
//                   <p>CGPA: {student.cgpa}</p>
//                   <p>Back Subjects: {student.backsubjects}</p>
//                   <p>Year: {student.year}</p>
//                   <p>Branch: {student.branch}</p>
//                   <p>Category: {student.category}</p>
//                   <p>Scholarships: {student.scholarships}</p>
//                   <p>Actual Fee: {student.actualfee}</p>
//                   <p>Total Fee: {student.totalfee}</p>
//                   <p>Remaining: {student.remaining}</p>
//                   {/* Include other student details */}
//                 </div>
