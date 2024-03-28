import React, { useState } from "react";

const AcupForm = () => {
  const [prn, setPrn] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [formData, setFormData] = useState({
    prn: "",
    rollnum: "",
    name: "",
    ssc: "",
    Hsc: "",
    semwise: [],
    cgpa: "",
    dob: "",
    backsubjects: [],
    idcard: {
      idname: "",
      idaddress: "",
      idDOB: "",
      idmobile: "",
      idparentmobile: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/studentsAc/${prn}`);
      if (response.ok) {
        const data = await response.json();
        setStudentData(data);
        setFormData(data);
      } else {
        console.error("Failed to fetch student data");
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/studentsAc/${prn}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Student information updated successfully");
      } else {
        console.error("Failed to update student information");
      }
    } catch (error) {
      console.error("Error updating student information:", error);
    }
  };

  return (
    <div>
      <h2>Update Student Information</h2>
      <input
        type="text"
        placeholder="Enter PRN"
        value={prn}
        onChange={(e) => setPrn(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {studentData && (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="prn"
            placeholder="PRN"
            value={formData.prn}
            onChange={handleChange}
            disabled
          />
          <input
            type="number"
            name="rollnum"
            placeholder="Roll Number"
            value={formData.rollnum}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="ssc"
            placeholder="SSC Score"
            value={formData.ssc}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="Hsc"
            placeholder="HSC Score"
            value={formData.Hsc}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="semwise"
            placeholder="Semester-wise Scores (Comma separated)"
            value={formData.semwise.join(",")}
            onChange={(e) =>
              setFormData({ ...formData, semwise: e.target.value.split(",") })
            }
            required
          />
          <input
            type="number"
            name="cgpa"
            placeholder="CGPA"
            value={formData.cgpa}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="backsubjects"
            placeholder="Back Subjects (Comma separated)"
            value={formData.backsubjects.join(",")}
            onChange={(e) =>
              setFormData({
                ...formData,
                backsubjects: e.target.value.split(","),
              })
            }
            required
          />
          <input
            type="text"
            name="idname"
            placeholder="ID Name"
            value={formData.idcard.idname}
            onChange={(e) =>
              setFormData({
                ...formData,
                idcard: { ...formData.idcard, idname: e.target.value },
              })
            }
            required
          />
          <input
            type="text"
            name="idaddress"
            placeholder="ID Address"
            value={formData.idcard.idaddress}
            onChange={(e) =>
              setFormData({
                ...formData,
                idcard: { ...formData.idcard, idaddress: e.target.value },
              })
            }
            required
          />
          <input
            type="text"
            name="idDOB"
            placeholder="ID DOB"
            value={formData.idcard.idDOB}
            onChange={(e) =>
              setFormData({
                ...formData,
                idcard: { ...formData.idcard, idDOB: e.target.value },
              })
            }
            required
          />
          <input
            type="text"
            name="idmobile"
            placeholder="ID Mobile"
            value={formData.idcard.idmobile}
            onChange={(e) =>
              setFormData({
                ...formData,
                idcard: { ...formData.idcard, idmobile: e.target.value },
              })
            }
            required
          />
          <input
            type="text"
            name="idparentmobile"
            placeholder="ID Parent Mobile"
            value={formData.idcard.idparentmobile}
            onChange={(e) =>
              setFormData({
                ...formData,
                idcard: { ...formData.idcard, idparentmobile: e.target.value },
              })
            }
            required
          />
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default AcupForm;
