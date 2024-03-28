import React, { useState } from "react";
import "./AcForm.css";
import Navbar from "../Navbar";
import AcgetAll from "./AcgetAll";
import AcupForm from "./AcupForm";
import AcgetOne from "./AcgetOne";
const AcForm = () => {
  const [formData, setFormData] = useState({
    prn: "",
    rollnum: "",
    name: "",
    ssc: "",
    Hsc: "",
    semwise: [],
    cgpa: "",

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/studentsAc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Student information submitted successfully");

        setFormData({
          prn: "",
          rollnum: "",
          name: "",
          ssc: "",
          Hsc: "",
          semwise: [],
          cgpa: "",
          backsubjects: [],
          idcard: {
            idname: "",
            idaddress: "",
            idDOB: "",
            idmobile: "",
            idparentmobile: "",
          },
        });
      } else {
        console.error("Failed to submit student information");
      }
    } catch (error) {
      console.error("Error submitting student information:", error);
    }
  };

  return (
    <div className="formi">
      <Navbar></Navbar>

      <AcgetAll></AcgetAll>

      <AcgetOne></AcgetOne>
      <AcupForm></AcupForm>
      <div className="ac-form">
        <div className="ac-container">
          <h2 className="myheading">Student Information Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Input fields for student information */}
            <label htmlFor="prn">
              <h4>PRN:</h4>
            </label>

            <input
              type="number"
              name="prn"
              placeholder="PRN"
              value={formData.prn}
              onChange={handleChange}
              required
            />
            <label htmlFor="ROll Num">
              {" "}
              <h4>Roll Num:</h4>
            </label>

            <input
              type="number"
              name="rollnum"
              placeholder="Roll Number"
              value={formData.rollnum}
              onChange={handleChange}
              required
            />
            <label htmlFor="Name">
              {" "}
              <h4>Name :</h4>
            </label>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="ssc marks">
              {" "}
              <h4>SSC Marks (in %):</h4>
            </label>

            <input
              type="number"
              name="ssc"
              placeholder="SSC Score"
              value={formData.ssc}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">
              <h4>HSC Marks:</h4>
            </label>

            <input
              type="number"
              name="Hsc"
              placeholder="HSC Score"
              value={formData.Hsc}
              onChange={handleChange}
              required
            />
            {/* Assuming semwise and backsubjects are arrays */}
            <label htmlFor="name">
              <h4> SEMISTER MARKS (enter ONLY numbers saperated by comma):</h4>
            </label>

            <textarea
              className="ac-form-group"
              name="semwise"
              placeholder="Semester-wise Scores (comma-separated)"
              value={formData.semwise.join(",")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  semwise: e.target.value.split(",").map((mark) => mark.trim()),
                })
              }
              required
            ></textarea>

            <label htmlFor="name">
              <h4>CGPA:</h4>
            </label>

            <input
              type="number"
              name="cgpa"
              placeholder="CGPA"
              value={formData.cgpa}
              onChange={handleChange}
            />
            <label htmlFor="name">
              <h4> BACK-SUBJECTS (enter saperated by comma):</h4>{" "}
            </label>

            <textarea
              className="ac-form-group"
              name="backsubjects"
              placeholder="Backsubjects (comma-separated)"
              value={formData.backsubjects.join(",")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  backsubjects: e.target.value
                    .split(",")
                    .map((subject) => subject.trim()),
                })
              }
            ></textarea>
            {/* Assuming idcard fields are strings */}
            <label htmlFor="name">
              <h4>Name On Id card:</h4>
            </label>

            <input
              type="text"
              className="ac-form-group"
              name="idname"
              placeholder="ID Name"
              value={formData.idcard.idname}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  idcard: { ...prevData.idcard, idname: e.target.value },
                }))
              }
              required
            />

            <label htmlFor="name">
              <h4>Address On Id card:</h4>
            </label>
            <input
              type="text"
              className="ac-form-group"
              name="idaddress"
              placeholder="ID Address"
              value={formData.idcard.idaddress}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  idcard: { ...prevData.idcard, idaddress: e.target.value },
                }))
              }
              required
            />

            <label htmlFor="name">
              <h4>DOB On Id card:</h4>
            </label>
            <input
              type="date"
              className="ac-form-group"
              name="idDOB"
              placeholder="ID DOB"
              value={formData.idcard.idDOB}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  idcard: { ...prevData.idcard, idDOB: e.target.value },
                }))
              }
              required
            />
            <label htmlFor="name">
              <h4>Phone No. On Id card:</h4>
            </label>
            <input
              type="text"
              className="ac-form-group"
              name="idmobile"
              placeholder="ID Mobile"
              value={formData.idcard.idmobile}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  idcard: { ...prevData.idcard, idmobile: e.target.value },
                }))
              }
              required
            />

            <label htmlFor="name">
              <h4>Parent No. On Id card:</h4>
            </label>
            <input
              type="text"
              className="ac-form-group"
              name="idparentmobile"
              placeholder="ID Parent Mobile"
              value={formData.idcard.idparentmobile}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  idcard: {
                    ...prevData.idcard,
                    idparentmobile: e.target.value,
                  },
                }))
              }
              required
            />
            {/* Add more input fields for other student information */}
            <button className="ac-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AcForm;
