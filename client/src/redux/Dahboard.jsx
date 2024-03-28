import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudentData } from "./student";
import DashBrdInfo from "./DashBrdInfo";
import Navbar from "../Navbar";
import Card from "./Card";
import "./DahBoard.css";
const Dahboard = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.student);
  const [searchTermOne, setSearchTermOne] = useState("");

  const [searchTermTwo, setSearchTermTwo] = useState("");

  const [searchField, setSearchField] = useState("");

  const [searchSuperField, setSuperSearchField] = useState("select field");
  const [byBranch, setByBranch] = useState({});
  const [byYear, setByYear] = useState({});
  const [byAll, setByAll] = useState([]);
  const [check, setCheck] = useState(0);
  let filteredStudents = [];
  useEffect(() => {
    dispatch(fetchAllStudentData());
  }, [dispatch]);

  function calculateAge(dateOfBirth) {
    var today = new Date();
    var parts = dateOfBirth.split("-"); // Split the date string by '-'
    var birthDate = new Date(parts[0], parts[1] - 1, parts[2]); // Create a new Date object with correct year, month, and day
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    console.log(
      birthDate,
      "hi",
      dateOfBirth,
      "hi",
      today,
      "hi",
      age,
      "hi",
      monthDiff
    );
    return age;
  }

  const handlethings = (e) => {
    setSuperSearchField(e.target.value);
    const filteredStudents = Object.values(students).filter((student) => {
      if (searchField === "DOB") {
        const age = calculateAge(student.DOB);
        return age >= searchTermOne && age <= searchTermTwo;
      } else if (searchField === "backsubjects") {
        const backsub = student.backsubjects.length;
        return backsub >= searchTermOne && backsub <= searchTermTwo;
      } else if (searchField === "gender") {
        return (
          student[searchField].toLowerCase() === searchTermOne.toLowerCase()
        );
      } else if (searchField !== "") {
        return (
          student[searchField] >= searchTermOne &&
          student[searchField] <= searchTermTwo
        );
      } else {
        return true;
      }
    });
    console.log(filteredStudents);
    setByAll(filteredStudents);

    const branchObj = { CSE: [], Electrical: [], Civil: [], Data: [] };
    const yearObj = { fy: [], sy: [], ty: [], ly: [] };

    filteredStudents.forEach((student) => {
      branchObj[student.branch].push(student);
      yearObj[student.year].push(student);
    });

    setByBranch(branchObj);
    setByYear(yearObj);
  };

  useEffect(() => {
    console.log("byBranch:", byBranch);
    console.log("byYear:", byYear);
  }, [byBranch, byYear]);

  const handleInputType = (field) => {
    switch (field) {
      case "gender":
        return "text";
      default:
        return "number";
    }
  };
  return (
    <>
      {" "}
      <Navbar></Navbar>
      <div className="">
        <div className="dashbrd">
          <div className="search-container">
            <select
              value={searchField}
              onChange={(e) => {
                setSearchField(e.target.value);
                setSearchTermOne("");
                setSearchTermTwo("");
                setCheck(1);
                setSuperSearchField("all");
              }}
              className="styled-select"
            >
              <option value="">Select Field</option>

              <option value="DOB">age</option>
              <option value="gender">Gender</option>

              <option value="ssc">SSC</option>
              <option value="Hsc">HSC</option>
              <option value="cgpa">CGPA</option>
              <option value="backsubjects">Back Subjects</option>

              <option value="remaining">Remaining</option>
            </select>
            {(check === 1 || check === 2) && (
              <div className="ipcheck">
                {searchField === "gender" ? (
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="m"
                        checked={searchTermOne === "m"}
                        onChange={(e) => {
                          setSearchTermOne(e.target.value);
                          setSearchTermTwo(e.target.value);
                          setCheck(2);
                        }}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="f"
                        checked={searchTermOne === "f"}
                        onChange={(e) => {
                          setSearchTermOne(e.target.value);
                          setSearchTermTwo(e.target.value);
                          setCheck(2);
                        }}
                      />
                      Female
                    </label>
                  </div>
                ) : (
                  <>
                    {" "}
                    <input
                      type={handleInputType(searchField)}
                      placeholder="from"
                      value={searchTermOne}
                      onChange={(e) => {
                        setSearchTermOne(e.target.value);
                        setCheck(2);
                      }}
                      className="ip"
                    />
                    <input
                      type={handleInputType(searchField)}
                      placeholder="to"
                      value={searchTermTwo}
                      onChange={(e) => {
                        setSearchTermTwo(e.target.value);
                        setCheck(2);
                      }}
                      className="ip"
                    />
                  </>
                )}
              </div>
            )}

            {check === 2 && (
              <select
                value={searchSuperField}
                onChange={(e) => handlethings(e)}
                className="select2"
              >
                <option value="all">Select Field</option>
                <option value="all">All</option>

                <option value="year">year</option>
                <option value="branch">Branch</option>
              </select>
            )}
          </div>

          {
            <div>
              <DashBrdInfo
                searchSuperField={searchSuperField}
                byBranch={byBranch}
                byYear={byYear}
              />
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Dahboard;
