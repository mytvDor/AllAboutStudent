import React, { useState, useEffect } from "react";

import "./UpdateForm.css";

const UpdateForm = () => {
  const [prn, setPrn] = useState("");
  const [student, setStudent] = useState(null);
  const [formData, setFormData] = useState({
    prn: "",
    name: "",
    year: "",
    branch: "",
    category: "",
    scholarships: [],
    actualfee: 0,
    totalfee: 0,
    remaining: 0,
  });

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, category: student?.category }));
  }, [student]);

  const handlePrnChange = (e) => {
    setPrn(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/${prn}`);
      const data = await response.json();
      if (!data.message) {
        setStudent(data);
        setFormData(data);
        // alert(data);
      } else {
        alert("Student not found!");
        alert(data);
        setStudent(null);
        setFormData({
          prn: "",
          name: "",
          year: "",
          branch: "",
          category: "",
          scholarships: [],
          actualfee: 0,
          totalfee: 0,
          remaining: 0,
        });
      }
    } catch (error) {
      alert("Student not found!");

      console.error("Error searching student:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleScholarshipChange = (e) => {
    const { value } = e.target;
    if (formData.scholarships.includes(value)) {
      setFormData((prevData) => ({
        ...prevData,
        scholarships: prevData.scholarships.filter(
          (scholarship) => scholarship !== value
        ),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        scholarships: [...prevData.scholarships, value],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/${prn}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const updatedStudent = await response.json();
      console.log("Updated Student:", updatedStudent);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const renderScholarshipCheckboxes = () => {
    const { category } = formData;
    switch (category) {
      case "open":
        return (
          <>
            <label>
              <input
                type="checkbox"
                name="scholarships"
                value="openEbc"
                checked={formData.scholarships.includes("openEbc")}
                onChange={handleScholarshipChange}
              />
              Open EBC
            </label>
            <label>
              <input
                type="checkbox"
                name="scholarships"
                value="panjab"
                checked={formData.scholarships.includes("panjab")}
                onChange={handleScholarshipChange}
              />
              Panjab
            </label>
          </>
        );
      case "obc":
        return (
          <>
            <label>
              <input
                type="checkbox"
                name="scholarships"
                value="obc1"
                checked={formData.scholarships.includes("obc1")}
                onChange={handleScholarshipChange}
              />
              OBC1
            </label>
            <label>
              <input
                type="checkbox"
                name="scholarships"
                value="obc2"
                checked={formData.scholarships.includes("obc2")}
                onChange={handleScholarshipChange}
              />
              OBC2
            </label>
          </>
        );
      case "sc":
        return (
          <>
            <label>
              <input
                type="checkbox"
                name="scholarships"
                value="sc1"
                checked={formData.scholarships.includes("sc1")}
                onChange={handleScholarshipChange}
              />
              SC1
            </label>
            <label>
              <input
                type="checkbox"
                name="scholarships"
                value="sc2"
                checked={formData.scholarships.includes("sc2")}
                onChange={handleScholarshipChange}
              />
              SC2
            </label>
          </>
        );
      case "nt":
        return (
          <>
            <label>
              <input
                type="checkbox"
                name="scholarships"
                value="nt1"
                checked={formData.scholarships.includes("nt1")}
                onChange={handleScholarshipChange}
              />
              NT1
            </label>
            <label>
              <input
                type="checkbox"
                name="scholarships"
                value="nt2"
                checked={formData.scholarships.includes("nt2")}
                onChange={handleScholarshipChange}
              />
              NT2
            </label>
          </>
        );
      default:
        return null;
    }
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      category: value,
      scholarships: [],
    }));
  };

  return (
    <div>
      <h2>Update Student</h2>
      <label>
        PRN:
        <input type="text" value={prn} onChange={handlePrnChange} />
      </label>
      <button onClick={handleSearch}>Search</button>
      {student && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Year:
            <select name="year" value={formData.year} onChange={handleChange}>
              <option value="">Select Year</option>
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
              <option value="Fourth">Fourth</option>
            </select>
          </label>
          <label>
            Branch:
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            >
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
              <option value="CE">CE</option>
            </select>
          </label>
          <label>
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="open">Open</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="nt">NT</option>
            </select>
          </label>
          <label>
            Scholarships:
            {renderScholarshipCheckboxes()}
          </label>

          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default UpdateForm;
