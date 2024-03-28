import React, { useState, useEffect } from "react";
import "./ViewForm.css"; // Import your CSS file for styling

const ViewForm = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDownloadData = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "blob" });
    const url = URL.createObjectURL(wbout);
    const a = document.createElement("a");
    a.href = url;
    a.download = "students.xlsx";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="view-form-container">
      <h2>View Students</h2>
      <button className="download-button" onClick={handleDownloadData}>
        Download Excel
      </button>
      <div className="cards-container">
        {students.map((student) => (
          <div key={student.prn} className="card">
            <h3>{student.name}</h3>
            <p>
              <strong>PRN:</strong> {student.prn}
            </p>
            <p>
              <strong>Year:</strong> {student.year}
            </p>
            <p>
              <strong>Branch:</strong> {student.branch}
            </p>
            <p>
              <strong>Category:</strong> {student.category}
            </p>
            <p>
              <strong>Scholarships:</strong> {student.scholarships.join(", ")}
            </p>
            <p>
              <strong>Total Fee:</strong> {student.totalfee}
            </p>
            <p>
              <strong>Actual Fee:</strong> {student.actualfee}
            </p>
            <p>
              <strong>Remaining Fee:</strong> {student.remaining}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewForm;
