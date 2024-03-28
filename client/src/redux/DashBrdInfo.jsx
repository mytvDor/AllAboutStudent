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
  const getBranchLengths = (data) => {
    const branchLengths = {};
    for (const branch in data) {
      if (data.hasOwnProperty(branch)) {
        branchLengths[branch] = data[branch].length;
      }
    }
    return branchLengths;
  };

  const branchLengths = getBranchLengths(byBranch);
  const yearLengths = getBranchLengths(byYear);

  const generateData = (lengths) => {
    return Object.entries(lengths).map(([name, value]) => ({ name, value }));
  };

  const generateDataCombine = (lengths) => {
    return Object.entries(lengths).map(([name, value]) => ({ name, value }));
  };

  const branchData = generateData(branchLengths);
  const yearData = generateData(yearLengths);

  const getValueByName = (name) => {
    const foundObject = yearData.find((item) => item.name === name);

    if (foundObject) {
      return foundObject.value;
    } else {
      return null;
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
              <ResponsiveContainer width={400} height={300} className="pie">
                <BarChart width={600} height={300} data={branchData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
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

                <ResponsiveContainer width={400} height={300} className="pie">
                  <BarChart width={600} height={300} data={yearData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      tickFormatter={(value) => `${value} Year`}
                    />
                    <YAxis />
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
            </div>
          ))}
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
              <ResponsiveContainer width={400} height={300} className="pie">
                <BarChart width={600} height={300} data={branchData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
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

      {searchSuperField === "year" && (
        <>
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

                <ResponsiveContainer width={400} height={300} className="pie">
                  <BarChart width={600} height={300} data={yearData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      tickFormatter={(value) => `${value} Year`}
                    />
                    <YAxis />
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
