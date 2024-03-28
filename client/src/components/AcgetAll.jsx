import React, { useState, useEffect } from "react";

const AcgetAll = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/studentsAc");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>PRN</th>
            <th>Name</th>
            <th>Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.prn}>
              <td>{student.prn}</td>
              <td>{student.name}</td>
              <td>{student.rollnum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcgetAll;
