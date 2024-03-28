import React, { useState, useEffect } from "react";

const SgetStud = () => {
  const [students, setStudents] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const fetchStudentsData = async () => {
    fetchImageUrls();

    try {
      const response = await fetch("http://localhost:5000/studinfo");
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        console.error("Failed to fetch student data");
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const fetchImageUrls = async () => {
    try {
      const response = await fetch("http://localhost:5000/getAllImageUrls");
      if (response.ok) {
        const data = await response.json();
        setImageUrls(data);
        console.log(data); // Set image URLs
      } else {
        console.error("Failed to fetch image URLs");
      }
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    }
  };

  useEffect(() => {
    fetchStudentsData();
  }, []);

  return (
    <div>
      <h2>All Students Data and Images</h2>
      {students.map((student) => (
        <div key={student.prn}>
          <p>PRN: {student.prn}</p>
          <p>Name: {student.name}</p>
          <p>Address: {student.address}</p>
          {imageUrls[student.prn] && (
            <img
              src={`http://localhost:5000/${imageUrls[student.prn].filename}.${
                imageUrls[student.prn].extension
              }`}
              alt={`Student ${student.prn}`}
              style={{ width: "200px", height: "200px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SgetStud;
