import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudentData } from "../redux/student";
import "./new.css";
import Navbar from "../Navbar";
import Card from "./Card";
import "./studentdatacomp.css";
const StudentDataComponent = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.student);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("");
  const [checkselecton, setCheckSelection] = useState(false);
  useEffect(() => {
    dispatch(fetchAllStudentData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredStudents = Object.values(students).filter((student) => {
    if (searchTerm === "") {
      return true;
    }
    const fieldValue = student[searchField];
    if (fieldValue !== undefined && fieldValue !== null) {
      console.log(fieldValue);
      return fieldValue
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    }
    return false;
  });

  const handleInputType = (field) => {
    switch (field) {
      case "DOB":
        return "date";
      case "phone":
      case "parentphone":
        return "tel";

      case "gender":
        return "radio";
      default:
        return "text";
    }
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="">
        <div className="search-containeri">
          <select
            value={searchField}
            onChange={(e) => {
              setSearchField(e.target.value);
              setSearchTerm("");
              setCheckSelection(true);
            }}
            className="styled-selecti"
          >
            <option value="">Select Field</option>
            <option value="name">Name</option>
            <option value="prn">PRN</option>
            <option value="address">Address</option>
            <option value="phone">Phone</option>
            <option value="parentphone">Parent Phone</option>
            <option value="DOB">DOB</option>
            <option value="gender">Gender</option>
            <option value="email">Email</option>
            <option value="linkedin">LinkedIn</option>
            <option value="adharnum">Adhar Number</option>
            <option value="resumelink">Resume Link</option>
            <option value="rollnum">Roll Number</option>
            <option value="ssc">SSC</option>
            <option value="Hsc">HSC</option>
            <option value="semwise">Semester-wise</option>
            <option value="cgpa">CGPA</option>
            <option value="backsubjects">Back Subjects</option>
            <option value="year">Year</option>
            <option value="branch">Branch</option>
            <option value="category">Category</option>
            <option value="scholarships">Scholarships</option>
            <option value="actualfee">Actual Fee</option>
            <option value="totalfee">Total Fee</option>
            <option value="remaining">Remaining</option>
          </select>
          {checkselecton && (
            <div className="chekselection  ipcheck">
              {" "}
              {searchField == "gender" ? (
                <div>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="m"
                      checked={searchTerm === "m"}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="f"
                      checked={searchTerm === "f"}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    Female
                  </label>
                </div>
              ) : (
                <input
                  type={handleInputType(searchField)}
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="ipi"
                />
              )}
            </div>
          )}
        </div>
        <Card students={filteredStudents}></Card>
      </div>
    </div>
  );
};

export default StudentDataComponent;
