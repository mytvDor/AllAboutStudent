import React, { useState } from "react";

const FeeUpdate = () => {
  const [prn, setPrn] = useState("");
  const [student, setStudent] = useState(null);
  const [newFee, setNewFee] = useState(0);

  const handlePrnChange = (e) => {
    setPrn(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/${prn}`);
      const data = await response.json();
      if (!data.message) {
        setStudent(data);
        alert(JSON.stringify(data));
      } else {
        alert("Student not found!");
        setStudent(null);
      }
    } catch (error) {
      console.error("Error searching student:", error);
      alert("Error searching student:", error);
    }
  };
  const handleUpdateFee = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/updateFee/${student.prn}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newFee }),
        }
      );
      const data = await response.json();
      alert(
        `you paid ${data.totalfee - data.remaining} \nremaining fee now ${
          data.remaining
        } `
      );
      console.log("Fee updated successfully:", data);
    } catch (error) {
      console.error("Error updating fee:", error);
      alert("Error updating fee:", error);
    }
  };

  return (
    <div>
      <h2>Update Student Fee</h2>
      <label>
        PRN:
        <input type="text" value={prn} onChange={handlePrnChange} />
      </label>
      <button onClick={handleSearch}>Search</button>
      {student && (
        <div>
          <h3>Student Details</h3>
          <p>
            <strong>Name:</strong> {student.name}
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
          <label>
            New Fee:
            <input
              type="number"
              value={newFee}
              onChange={(e) => setNewFee(e.target.value)}
            />
          </label>
          <button onClick={handleUpdateFee}>Update Fee</button>
        </div>
      )}
    </div>
  );
};

export default FeeUpdate;
