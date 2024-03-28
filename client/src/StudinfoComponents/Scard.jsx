import React, { useState } from "react";

const Scard = () => {
  const [alldata, setAlldata] = useState([]);
  const handleClk = async () => {
    try {
      const response = await fetch("http://localhost:5000/studinfo");

      if (!response.ok) {
        console.error("error");
      } else {
        const data = await response.json();
        console.log(data);

        setAlldata(data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div>
      <button onClick={handleClk}>Fetch Data</button>
      {alldata && alldata.length > 0 ? (
        <div>
          {alldata.map((student, index) => (
            <div key={index}>
              <p>PRN: {student.prn}</p>
              <p>Name: {student.name}</p>
              {/* Display other student information similarly */}
            </div>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Scard;
