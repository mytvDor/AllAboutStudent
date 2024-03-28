// export default Form;
import React, { useState } from "react";
import "./Form.css"; // External CSS file for styles
import Navbar from "../Navbar";
const Form = () => {
  const [formData, setFormData] = useState({
    prn: "",
    name: "",
    year: "fy",
    branch: "",
    category: "",
    scholarships: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      scholarships: [],
    });
  };

  const handleScholarshipChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        scholarships: [...formData.scholarships, value],
      });
    } else {
      setFormData({
        ...formData,
        scholarships: formData.scholarships.filter(
          (scholarship) => scholarship !== value
        ),
      });
    }
  };

  const scholarshipOptions = () => {
    const { category } = formData;
    switch (category) {
      case "open":
        return ["EBC", "Panjab"];
      case "obc":
        return ["OBC1", "OBC2"];
      case "sc":
        return ["SC1", "SC2"];
      case "nt":
        return ["NT1", "NT2"];
      default:
        return [];
    }
  };

  const branchOptions = () => {
    return ["CSE", "Data", "Electrical", "Civil"];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form data submitted successfully!");
        setFormData({
          prn: "",
          name: "",
          year: "fy",
          branch: "",
          category: "",
          scholarships: [],
        });
      } else {
        console.error("Failed to submit form data", formData);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className="over">
      <Navbar></Navbar>
      <div className="form">
        <form className="student-form" onSubmit={handleSubmit}>
          <h2 className="myheading">Student Fees Form</h2>
          <div className="form-group">
            <label htmlFor="prn">PRN:</label>
            <input
              type="number"
              id="prn"
              name="prn"
              value={formData.prn}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year:</label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              required
            >
              <option value="fy">First Year</option>
              <option value="sy">Second Year</option>
              <option value="ty">Third Year</option>
              <option value="ly">last Year</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="branch">Branch:</label>
            <select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Branch</option>
              {branchOptions().map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              <option value="open">Open</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="nt">NT</option>
            </select>
          </div>
          <div className="form-group">
            <label>Scholarships:</label>
            {scholarshipOptions().map((scholarship) => (
              <div key={scholarship} className="checkbox">
                <input
                  type="checkbox"
                  id={scholarship}
                  name={scholarship}
                  value={scholarship}
                  checked={formData.scholarships.includes(scholarship)}
                  onChange={handleScholarshipChange}
                />
                <label htmlFor={scholarship}>{scholarship}</label>
              </div>
            ))}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
