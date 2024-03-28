import React, { useState, useEffect } from "react";

const AcgetData = () => {
  const [studentData, setStudentData] = useState(null);
  const [prn, setPrn] = useState("");

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/studentsAc/${prn}`);
        if (response.ok) {
          const data = await response.json();
          setStudentData(data);
          console.log(data);
        } else {
          console.error("Failed to fetch student data");
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    if (prn) {
      fetchStudentData();
    }
  }, [prn]);

  const handlePrnChange = (e) => {
    setPrn(e.target.value);
  };

  return (
    <div>
      <h2>Enter PRN to fetch student data:</h2>
      <input
        type="number"
        value={prn}
        onChange={handlePrnChange}
        placeholder="Enter PRN"
      />
      {/* Conditional rendering based on whether studentData is fetched */}
      {studentData ? (
        <div className="student-card">
          <h2>Student Information</h2>
          <div className="card">
            <div className="card-header">
              <h3>Personal Information</h3>
            </div>
            <div className="card-body">
              <p>
                <strong>PRN:</strong> {studentData.prn}
              </p>
              <p>
                <strong>Name:</strong> {studentData.name}
              </p>
              <p>
                <strong>Roll Number:</strong> {studentData.rollnum}
              </p>
              <p>
                <strong>SSC Score:</strong> {studentData.ssc}
              </p>
              <p>
                <strong>HSC Score:</strong> {studentData.Hsc}
              </p>
              <p>
                <strong>Date of Birth:</strong> {studentData.dob}
              </p>
              <p>
                <strong>CGPA:</strong> {studentData.cgpa}
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3>Academic Information</h3>
            </div>
            <div className="card-body">
              <p>
                <strong>Semester-wise Scores:</strong>{" "}
                {studentData.semwise.join(", ")}
              </p>
              <p>
                <strong>Back Subjects:</strong>{" "}
                {studentData.backsubjects.join(", ")}
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3>ID Card Information</h3>
            </div>
            <div className="card-body">
              <p>
                <strong>ID Name:</strong> {studentData.idcard.idname}
              </p>
              <p>
                <strong>ID Address:</strong> {studentData.idcard.idaddress}
              </p>
              <p>
                <strong>ID DOB:</strong> {studentData.idcard.idDOB}
              </p>
              <p>
                <strong>ID Mobile:</strong> {studentData.idcard.idmobile}
              </p>
              <p>
                <strong>ID Parent Mobile:</strong>{" "}
                {studentData.idcard.idparentmobile}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>enter the prn</p>
      )}
    </div>
  );
};

export default AcgetData;
