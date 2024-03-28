// import React from "react";

// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const DashBrdInfo = ({ byBranch, byYear, searchSuperField }) => {
//   const hi = byBranch.CSE;
//   console.log(hi.length);

//   const data = [
//     { name: "Group A", value: 400 },
//     { name: "Group B", value: 300 },
//     { name: "Group C", value: 300 },
//     { name: "Group D", value: 200 },
//   ];

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   const RADIAN = Math.PI / 180;

//   const renderCustomizedLabel = ({
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     percent,
//     index,
//   }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//       <text
//         x={x}
//         y={y}
//         fill="white"
//         textAnchor={x > cx ? "start" : "end"}
//         dominantBaseline="central"
//       >
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };
//   return (
//     <div>
//       {searchSuperField == "all" && (
//         <>
//           {Object.entries(byBranch).map(([branch, students]) => (
//             <div key={branch}>
//               <h2>{branch} Branch</h2>
//               {students.map((student) => (
//                 <div key={student.prn} className="student-card">
//                   {/* Render student information */}
//                   <p>Name: {student.name}</p>
//                   <p>PRN: {student.prn}</p>
//                   <p>Address: {student.address}</p>
//                   <p>Phone: {student.phone}</p>
//                   <p>Parent Phone: {student.parentphone}</p>
//                   <p>DOB: {student.DOB}</p>
//                   <p>Gender: {student.gender}</p>
//                   <p>Email: {student.email}</p>
//                   <p>LinkedIn: {student.linkedin}</p>
//                   <p>Adhar Number: {student.adharnum}</p>
//                   <p>Resume Link: {student.resumelink}</p>{" "}
//                   <img
//                     src={`http://localhost:5000/${student.img}`}
//                     alt="Student Image"
//                   />
//                   <p>Roll Number: {student.rollnum}</p>
//                   <p>SSC: {student.ssc}</p>
//                   <p>HSC: {student.Hsc}</p>
//                   <p>Semester-wise: {student.semwise}</p>
//                   <p>CGPA: {student.cgpa}</p>
//                   <p>Back Subjects: {student.backsubjects}</p>
//                   <p>Year: {student.year}</p>
//                   <p>Branch: {student.branch}</p>
//                   <p>Category: {student.category}</p>
//                   <p>Scholarships: {student.scholarships}</p>
//                   <p>Actual Fee: {student.actualfee}</p>
//                   <p>Total Fee: {student.totalfee}</p>
//                   <p>Remaining: {student.remaining}</p>
//                   {/* Include other student details */}
//                 </div>
//               ))}
//             </div>
//           ))}
//           {/* Render students by year */}
//           {Object.entries(byYear).map(([year, students]) => (
//             <div key={year}>
//               <h2>{year} Year</h2>
//               {students.map((student) => (
//                 <div key={student.prn} className="student-card">
//                   {/* Render student information */}
//                   <p>Name: {student.name}</p>
//                   <p>PRN: {student.prn}</p>
//                   {/* Include other student details */}
//                 </div>
//               ))}
//             </div>
//           ))}

//           <ResponsiveContainer width="100%" height={400}>
//             <PieChart width={400} height={400}>
//               <Pie
//                 data={data}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 label={renderCustomizedLabel}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="value"
//               >
//                 {data.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </>
//       )}

//       {searchSuperField == "branch" && (
//         <>
//           {Object.entries(byBranch).map(([branch, students]) => (
//             <div key={branch}>
//               <h2>{branch} Branch</h2>
//               {students.map((student) => (
//                 <div key={student.prn} className="student-card">
//                   {/* Render student information */}
//                   <p>Name: {student.name}</p>
//                   <p>PRN: {student.prn}</p>
//                   <p>Address: {student.address}</p>
//                   <p>Phone: {student.phone}</p>
//                   <p>Parent Phone: {student.parentphone}</p>
//                   <p>DOB: {student.DOB}</p>
//                   <p>Gender: {student.gender}</p>
//                   <p>Email: {student.email}</p>
//                   <p>LinkedIn: {student.linkedin}</p>
//                   <p>Adhar Number: {student.adharnum}</p>
//                   <p>Resume Link: {student.resumelink}</p>{" "}
//                   <img
//                     src={`http://localhost:5000/${student.img}`}
//                     alt="Student Image"
//                   />
//                   <p>Roll Number: {student.rollnum}</p>
//                   <p>SSC: {student.ssc}</p>
//                   <p>HSC: {student.Hsc}</p>
//                   <p>Semester-wise: {student.semwise}</p>
//                   <p>CGPA: {student.cgpa}</p>
//                   <p>Back Subjects: {student.backsubjects}</p>
//                   <p>Year: {student.year}</p>
//                   <p>Branch: {student.branch}</p>
//                   <p>Category: {student.category}</p>
//                   <p>Scholarships: {student.scholarships}</p>
//                   <p>Actual Fee: {student.actualfee}</p>
//                   <p>Total Fee: {student.totalfee}</p>
//                   <p>Remaining: {student.remaining}</p>
//                   {/* Include other student details */}
//                 </div>
//               ))}
//             </div>
//           ))}
//           {/* Render students by year */}
//         </>
//       )}

//       {searchSuperField == "year" && (
//         <>
//           {/* Render students by year */}
//           {Object.entries(byYear).map(([year, students]) => (
//             <div key={year}>
//               <h2>{year} Year</h2>
//               {students.map((student) => (
//                 <div key={student.prn} className="student-card">
//                   {/* Render student information */}
//                   <p>Name: {student.name}</p>
//                   <p>PRN: {student.prn}</p>
//                   {/* Include other student details */}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default DashBrdInfo;

import React from "react";
import Card from "./Card";
import "./DashBrdInfo.css";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";

const DashBrdInfo = ({ byBranch, byYear, searchSuperField }) => {
  // Function to calculate the length of each branch dynamically
  const getBranchLengths = (data) => {
    const branchLengths = {};
    for (const branch in data) {
      if (data.hasOwnProperty(branch)) {
        branchLengths[branch] = data[branch].length;
      }
    }
    return branchLengths;
  };

  // const getBranchLengthcombine = (branchi, yeari) => {
  //   const branchLengths = {};
  //   for (const branch in branchi) {
  //     if (branchi.hasOwnProperty(branch)) {
  //       branchLengths[branch] = branchi[branch].length;
  //     }
  //   }

  //   for (const year in yeari) {
  //     if (yeari.hasOwnProperty(year)) {
  //       branchLengths[year] = yeari[year].length;
  //     }
  //   }
  //   return branchLengths;
  // };

  const branchLengths = getBranchLengths(byBranch);
  const yearLengths = getBranchLengths(byYear);
  // const combinelengths = getBranchLengthcombine(byBranch, byYear);

  const generateData = (lengths) => {
    return Object.entries(lengths).map(([name, value]) => ({ name, value }));
  };

  const generateDataCombine = (lengths) => {
    return Object.entries(lengths).map(([name, value]) => ({ name, value }));
  };

  const branchData = generateData(branchLengths);
  const yearData = generateData(yearLengths);

  // const getCombineData = (byBranch, byYear) => {
  //   const combineData = [];

  //   // Iterate through each branch
  //   for (const branch in byBranch) {
  //     if (byBranch.hasOwnProperty(branch)) {
  //       // Calculate the length of the current branch
  //       const branchLength = byBranch[branch].length;

  //       // Push data for the current branch
  //       combineData.push({
  //         name: branch,
  //         branch: branchLength,
  //         year: 0, // Initialize year length to 0
  //       });
  //     }
  //   }

  //   // Iterate through each year
  //   for (const year in byYear) {
  //     if (byYear.hasOwnProperty(year)) {
  //       // Check if the year exists as a branch
  //       const isBranch = combineData.some((data) => data.name === year);

  //       // If the year is not already present as a branch, add it
  //       if (!isBranch) {
  //         combineData.push({
  //           name: year,
  //           branch: 0, // Initialize branch length to 0
  //           year: byYear[year].length, // Calculate the length of the year data
  //         });
  //       }
  //     }
  //   }
  //   console.log("combine data, ", combineData);
  //   return combineData;
  // };

  // const CombineData = getCombineData(byBranch, byYear);
  // const CombineData = getCombineData(byBranch, byYear);
  const getValueByName = (name) => {
    // Find the object with the matching name
    const foundObject = yearData.find((item) => item.name === name);

    // If the object is found, return its value property
    if (foundObject) {
      // console.log(foundObject);
      return foundObject.value;
    } else {
      // Handle case where the object is not found
      return null; // Or any other appropriate value
    }
  };
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: getValueByName("fy"),
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: getValueByName("sy"),
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: getValueByName("ty"),
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: getValueByName("ly"),
      amt: 2000,
    },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${name}:${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="dashboard">
      {/* Your existing code */}
      {searchSuperField === "all" && (
        <>
          <div className="dashbrdComp">
            {" "}
            <div className=" piAndBar">
              {" "}
              <ResponsiveContainer width={300} height={300} className="pie">
                <PieChart width={400} height={400}>
                  <Pie
                    data={branchData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {branchData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>{" "}
              {/* //test fail */}
              {/* <ResponsiveContainer width="80%" height={400}>
              <BarChart width={600} height={300} data={branchData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="value" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer> */}
              {/* updated the branch name at x axis */}
              <ResponsiveContainer width={400} height={300} className="pie">
                <BarChart width={600} height={300} data={branchData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" /> {/* Show branch names on x-axis */}
                  <YAxis /> {/* Show y-axis labels */}
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="">
              {" "}
              <div className=" piAndBar">
                <ResponsiveContainer width={300} height={300} className="pie">
                  <PieChart width={400} height={400}>
                    <Pie
                      data={yearData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {yearData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                {/* //graph year */}
                {/* <ResponsiveContainer width="80%" height={400}>
              <BarChart width={600} height={300} data={yearData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={yearData} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="value"
                  fill="#8884d8"
                  label={{
                    position: "top",
                    content: ({ value }) => `${value}`,
                  }}
                />
              </BarChart>
            </ResponsiveContainer> */}
                {/* //updated year at x axis */}
                <ResponsiveContainer width={400} height={300} className="pie">
                  <BarChart width={600} height={300} data={yearData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      tickFormatter={(value) => `${value} Year`} // Add "Year" next to each year
                    />
                    <YAxis /> {/* Show y-axis labels */}
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          {Object.entries(byBranch).map(([branch, students]) => (
            <div key={branch}>
              <h2>{branch} Branch</h2>

              <Card students={students}></Card>
              {/* 
              {students.map((student) => (
                <div key={student.prn} className="student-card">
                 
                  <p>Name: {student.name}</p>
                  <p>PRN: {student.prn}</p>
                  <p>Address: {student.address}</p>
                  <p>Phone: {student.phone}</p>
                  <p>Parent Phone: {student.parentphone}</p>
                  <p>DOB: {student.DOB}</p>
                  <p>Gender: {student.gender}</p>
                  <p>Email: {student.email}</p>
                  <p>LinkedIn: {student.linkedin}</p>
                  <p>Adhar Number: {student.adharnum}</p>
                  <p>Resume Link: {student.resumelink}</p>{" "}
                  <img
                    src={`http://localhost:5000/${student.img}`}
                    alt="Student Image"
                  />
                  <p>Roll Number: {student.rollnum}</p>
                  <p>SSC: {student.ssc}</p>
                  <p>HSC: {student.Hsc}</p>
                  <p>Semester-wise: {student.semwise}</p>
                  <p>CGPA: {student.cgpa}</p>
                  <p>Back Subjects: {student.backsubjects}</p>
                  <p>Year: {student.year}</p>
                  <p>Branch: {student.branch}</p>
                  <p>Category: {student.category}</p>
                  <p>Scholarships: {student.scholarships}</p>
                  <p>Actual Fee: {student.actualfee}</p>
                  <p>Total Fee: {student.totalfee}</p>
                  <p>Remaining: {student.remaining}</p>
                 
                </div>
              ))} */}
            </div>
          ))}
          {/* Render students by year */}
          {Object.entries(byYear).map(([year, students]) => (
            <div key={year}>
              <h2>{year} Year</h2>
              <Card students={students}></Card>
            </div>
          ))}{" "}
        </>
      )}

      {searchSuperField === "branch" && (
        <>
          {/* <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
              <Pie
                data={yearData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {yearData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart width={600} height={300} data={yearData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="value" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer> */}
          <div className="dashbrdComp">
            {" "}
            <div className=" piAndBar">
              {" "}
              <ResponsiveContainer width={300} height={300} className="pie">
                <PieChart width={400} height={400}>
                  <Pie
                    data={branchData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {branchData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>{" "}
              {/* //test fail */}
              {/* <ResponsiveContainer width="80%" height={400}>
              <BarChart width={600} height={300} data={branchData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="value" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer> */}
              {/* updated the branch name at x axis */}
              <ResponsiveContainer width={400} height={300} className="pie">
                <BarChart width={600} height={300} data={branchData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" /> {/* Show branch names on x-axis */}
                  <YAxis /> {/* Show y-axis labels */}
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className=""> </div>
          </div>
          {Object.entries(byBranch).map(([branch, students]) => (
            <div key={branch}>
              <h2>{branch} Branch</h2>
              <Card students={students}></Card>
            </div>
          ))}{" "}
        </>
      )}
      {/* Your existing code */}

      {searchSuperField === "year" && (
        <>
          {/* <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
              <Pie
                data={branchData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {branchData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart width={600} height={300} data={branchData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="value" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer> */}

          <div className="dashbrdComp">
            {" "}
            <div className="">
              {" "}
              <div className=" piAndBar">
                <ResponsiveContainer width={300} height={300} className="pie">
                  <PieChart width={400} height={400}>
                    <Pie
                      data={yearData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {yearData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                {/* //graph year */}
                {/* <ResponsiveContainer width="80%" height={400}>
              <BarChart width={600} height={300} data={yearData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={yearData} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="value"
                  fill="#8884d8"
                  label={{
                    position: "top",
                    content: ({ value }) => `${value}`,
                  }}
                />
              </BarChart>
            </ResponsiveContainer> */}
                {/* //updated year at x axis */}
                <ResponsiveContainer width={400} height={300} className="pie">
                  <BarChart width={600} height={300} data={yearData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      tickFormatter={(value) => `${value} Year`} // Add "Year" next to each year
                    />
                    <YAxis /> {/* Show y-axis labels */}
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          {Object.entries(byYear).map(([year, students]) => (
            <div key={year}>
              <h2>{year} Year</h2>
              <Card students={students}></Card>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default DashBrdInfo;
