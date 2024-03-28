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
  // function calculateAge(dateOfBirth) {
  //   const today = new Date();
  //   const birthDate = new Date(dateOfBirth);
  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   const monthDifference = today.getMonth() - birthDate.getMonth();
  //   console.log(dateOfBirth);

  //   if (
  //     monthDifference < 0 ||
  //     (monthDifference === 0 && today.getDate() < birthDate.getDate())
  //   ) {
  //     age--;
  //   }
  //   // console.log(age);
  //   return age;
  // }
  // const handlethings = (e) => {
  //   setSuperSearchField(e.target.value);
  //   Object.values(students).filter((student) => {
  //     if (searchField === "DOB") {
  //       // Show all data entries if search term is empty
  //       const age = calculateAge(student.DOB);

  //       if (age >= searchTermOne && age <= searchTermTwo) {
  //         switch (student.branch) {
  //           case "CSE":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [CSE]: [...prevState[CSE], student],
  //             }));
  //             break;

  //           case "Electrical":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [Electrical]: [...prevState[Electrical], student],
  //             }));
  //             break;

  //           case "Civil":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [Civil]: [...prevState[Civil], student],
  //             }));
  //             break;

  //           case "Data":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [Data]: [...prevState[Data], student],
  //             }));
  //             break;
  //         }

  //         switch (student.year) {
  //           case "fy":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [fy]: [...prevState[fy], student],
  //             }));
  //             break;

  //           case "sy":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [sy]: [...prevState[sy], student],
  //             }));
  //             break;

  //           case "ty":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [ty]: [...prevState[ty], student],
  //             }));
  //             break;

  //           case "ly":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [ly]: [...prevState[ly], student],
  //             }));
  //             break;
  //         }

  //         const data = [...byAll, student];
  //         setByAll(...byAll, data);
  //       }
  //       // return true;
  //     }
  //     if (searchField === "") {
  //       // Show all data entries if search term is empty
  //       // return true;
  //     }
  //     if (searchField === "backsubjects") {
  //       const backsub = student.backsubjects.length;

  //       if (backsub >= searchTermOne && backsub <= searchTermTwo) {
  //         switch (student.branch) {
  //           case "CSE":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [CSE]: [...prevState[CSE], student],
  //             }));
  //             break;

  //           case "Electrical":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [Electrical]: [...prevState[Electrical], student],
  //             }));
  //             break;

  //           case "Civil":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [Civil]: [...prevState[Civil], student],
  //             }));
  //             break;

  //           case "Data":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [Data]: [...prevState[Data], student],
  //             }));
  //             break;
  //         }

  //         switch (student.year) {
  //           case "fy":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [fy]: [...prevState[fy], student],
  //             }));
  //             break;

  //           case "sy":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [sy]: [...prevState[sy], student],
  //             }));
  //             break;

  //           case "ty":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [ty]: [...prevState[ty], student],
  //             }));
  //             break;

  //           case "ly":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [ly]: [...prevState[ly], student],
  //             }));
  //             break;
  //         }

  //         const data = [...byAll, student];
  //         setByAll(...byAll, data);
  //       }
  //       // Show all data entries if search term is empty
  //       // return true;
  //     }
  //     // const fieldValue = student[searchField];
  //     // const fieldValue = student[searchField];

  //     if (
  //       searchField !== undefined &&
  //       searchField !== null &&
  //       searchField !== "backsubjects" &&
  //       searchField !== "DOB"
  //     ) {
  //       // for (let i = 0; i <= student.length; i++) {
  //       if (
  //         student.searchField >= searchTermOne &&
  //         student.searchField <= searchTermTwo
  //       ) {
  //         switch (student.branch) {
  //           case "CSE":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [CSE]: [...prevState[CSE], student],
  //             }));
  //             break;

  //           case "Electrical":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [Electrical]: [...prevState[Electrical], student],
  //             }));
  //             break;

  //           case "Civil":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [Civil]: [...prevState[Civil], student],
  //             }));
  //             break;

  //           case "Data":
  //             setByBranch((prevState) => ({
  //               ...prevState,
  //               [Data]: [...prevState[Data], student],
  //             }));
  //             break;
  //         }

  //         switch (student.year) {
  //           case "fy":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [fy]: [...prevState[fy], student],
  //             }));
  //             break;

  //           case "sy":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [sy]: [...prevState[sy], student],
  //             }));
  //             break;

  //           case "ty":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [ty]: [...prevState[ty], student],
  //             }));
  //             break;

  //           case "ly":
  //             setByYear((prevState) => ({
  //               ...prevState,
  //               [ly]: [...prevState[ly], student],
  //             }));
  //             break;
  //         }

  //         const data = [...byAll, student];
  //         setByAll(...byAll, data);
  //       }
  //       // }
  //       // return fieldValue;
  //     }
  //     // return false;

  //     console.log(byAll);
  //   });
  // };

  // Function to handle input type based on selected field
  // function calculateAge(dateOfBirth) {
  //   const today = new Date();
  //   const birthDate = new Date(dateOfBirth);

  //   const todayYear = today.getFullYear();
  //   const birthYear = birthDate.getFullYear();

  //   let age = todayYear - birthYear;
  //   console.log(age);

  //   const todayMonth = today.getMonth();
  //   const birthMonth = birthDate.getMonth();

  //   if (
  //     todayMonth < birthMonth ||
  //     (todayMonth === birthMonth && today.getDate() < birthDate.getDate())
  //   ) {
  //     age--;
  //   }
  //   console.log(typeof dateOfBirth);
  //   return age;
  // }
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

  // Example usage:
  // Output the calculated age

  const handlethings = (e) => {
    // const  = e.target.value; // Get the value of the super search field
    setSuperSearchField(e.target.value);
    // Filter students based on the selected search field
    const filteredStudents = Object.values(students).filter((student) => {
      if (searchField === "DOB") {
        // If the search field is "DOB", filter by age range
        const age = calculateAge(student.DOB);
        return age >= searchTermOne && age <= searchTermTwo;
      } else if (searchField === "backsubjects") {
        // If the search field is "backsubjects", filter by the number of back subjects
        const backsub = student.backsubjects.length;
        return backsub >= searchTermOne && backsub <= searchTermTwo;
      } else if (searchField === "gender") {
        // If the search field is "gender", convert input to lowercase and compare
        return (
          student[searchField].toLowerCase() === searchTermOne.toLowerCase()
        );
      } else if (searchField !== "") {
        // If the search field is not empty or "backsubjects" or "DOB", filter by the specified field
        return (
          student[searchField] >= searchTermOne &&
          student[searchField] <= searchTermTwo
        );
      } else {
        // If no search field is selected, return true to include all students
        return true;
      }
    });
    console.log(filteredStudents);
    // Update byAll state with filtered students
    setByAll(filteredStudents);

    // Initialize branch and year objects to store filtered students
    const branchObj = { CSE: [], Electrical: [], Civil: [], Data: [] };
    const yearObj = { fy: [], sy: [], ty: [], ly: [] };

    // Loop through filtered students to categorize them by branch and year
    filteredStudents.forEach((student) => {
      branchObj[student.branch].push(student); // Categorize by branch
      yearObj[student.year].push(student); // Categorize by year
    });

    // Update byBranch and byYear states with categorized students

    setByBranch(branchObj);
    setByYear(yearObj);
    // console.log(byBranch, byYear);
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
                    {/* Add more radio buttons for other gender options if needed */}
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
