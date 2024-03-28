import React, { useState } from "react";
import "../studInfoStyle/Sform.css";
import Navbar from "../Navbar";

import SupdateStud from "./SupdateStud";
import SgetStud from "./SgetStud";
import Scard from "./Scard";

const Sform = () => {
  const [fileInput, setFileInput] = useState(null);

  const [formData, setFormData] = useState({
    prn: "",
    name: "",
    address: "",
    phone: "",
    parentphone: "",
    DOB: "",
    gender: "",
    email: "",
    linkedin: "",
    adharnum: "",
    resumelink: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIp = (e) => {
    setFileInput(e.target);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (!fileInput || !fileInput.files[0]) {
      console.error("No file selected");
      return;
    }

    const fileExtension = fileInput.files[0].name.split(".").pop();
    console.log(fileExtension);
    // Set the filename as PRN with the file extension
    const filename = `${formData.prn}.${fileExtension}`;
    const imgData = new FormData();
    imgData.append("img", fileInput.files[0], filename);

    console.log(imgData);

    try {
      const response = await fetch("http://localhost:5000/uploadCreate", {
        method: "POST",
        body: imgData,
      });
      if (response.ok) {
        console.log("Product added successfully");
        // Reset form data if needed
      } else {
        console.error("Failed to add product");
        // console.log(error);
      }
    } catch (error) {
      console.error("Error is occured:", error);
    }
    //db data
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [img]: filename,
    // }));

    // console.log(formData);

    try {
      formData.img = `${formData.prn}.${fileInput.files[0].name
        .split(".")
        .pop()}`;

      const fetchDataResponse = await fetch("http://localhost:5000/studinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //   prn: formData.prn,
        //   name: formData.name,
        //   address: formData.address,
        //   phone: formData.phone,
        //   parentphone: formData.parentphone,
        //   DOB: formData.DOB.toString(),
        //   gender: formData.gender,
        //   email: formData.email,
        //   linkedin: formData.linkedin.toString(),
        //   adharnum: formData.adharnum,
        //   resumelink: formData.resumelink,
        //   img: formData.img,
        // },
        body: JSON.stringify(formData),
      });

      if (fetchDataResponse.ok) {
        console.log("done");
        setFormData({
          prn: "",
          name: "",
          address: "",
          phone: "",
          parentphone: "",
          DOB: "",
          gender: "",
          email: "",
          linkedin: "",
          adharnum: "",
          resumelink: "",
          img: "",
        });
        // Reset file input
        setFileInput(null);
        // Show alert
        alert("Form submitted successfully!");
      } else {
        console.log("error");
        alert("student already exist");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="formi">
      <Navbar></Navbar>

      <div className="container">
        <h2 className="myheading">User Registration Form</h2>
        {/* <form
          id="userForm"
          action="/upload"
          method="POST"
          onSubmit={handleSubmit}
        > */}

        <form
          id="userForm"
          action="/upload"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="sform"
        >
          <div className="form-group">
            <label htmlFor="prn">PRN:</label>
            <input
              type="number"
              id="prn"
              name="prn"
              value={formData.prn}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="parentphone">Parent's Phone:</label>
            <input
              type="text"
              id="parentphone"
              name="parentphone"
              required
              value={formData.parentphone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="DOB">Date of Birth:</label>
            <input
              type="date"
              id="DOB"
              name="DOB"
              required
              value={formData.DOB}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name={formData.gender}
              value="male"
              onChange={handleChange}
              required
            >
              <option value="male">Male</option>
              <option value="fe">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn:</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              required
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="adharnum">Aadhar Number:</label>
            <input
              type="text"
              id="adharnum"
              name="adharnum"
              required
              value={formData.adharnum}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resumelink">Resume Link:</label>
            <input
              type="url"
              id="resumelink"
              name="resumelink"
              required
              value={formData.resumelink}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Profile Image URL:</label>
            <input
              type="file"
              id="img"
              name="img"
              required
              // value={formData.img}
              onChange={handleIp}
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>

      <SgetStud></SgetStud>
      <Scard></Scard>
      <SupdateStud></SupdateStud>
    </div>
  );
};

export default Sform;
