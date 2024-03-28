import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    XLSX.writeFile(workbook, "students.xlsx");
  };

  return (
    <div>
      <h2>Student Table</h2>
      <button onClick={handleDownloadExcel}>Download Excel</button>
      <table>
        <thead>
          <tr>
            <th>PRN</th>
            <th>Name</th>
            <th>Year</th>
            <th>Branch</th>
            <th>Category</th>
            <th>Total Fee</th>
            <th>Remaining Fee</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.prn}</td>
              <td>{student.name}</td>
              <td>{student.year}</td>
              <td>{student.branch}</td>
              <td>{student.category}</td>
              <td>{student.totalfee}</td>
              <td>{student.remaining}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
