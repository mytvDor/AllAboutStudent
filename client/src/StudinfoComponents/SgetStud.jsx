// // // import React, { useState, useEffect } from "react";

// // // const SgetStud = () => {
// // //   const [students, setStudents] = useState([]); // State to store list of students

// // //   // Function to fetch all students data
// // //   const fetchStudentsData = async () => {
// // //     try {
// // //       const response = await fetch(`http://localhost:5000/studinfo`);
// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         setStudents(data); // Set list of students
// // //       } else {
// // //         console.error("Failed to fetch students data");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching students data:", error);
// // //     }
// // //   };

// // //   // Fetch all students data when component mounts
// // //   useEffect(() => {
// // //     fetchStudentsData();
// // //   }, []);

// // //   // Function to fetch image data based on PRN
// // //   const fetchImageData = async (prn) => {
// // //     try {
// // //       const response = await fetch(
// // //         `http://localhost:5000/studinfo/${prn}/image`
// // //       );
// // //       if (response.ok) {
// // //         const imageBlob = await response.blob();
// // //         return URL.createObjectURL(imageBlob); // Return image source using Blob URL
// // //       } else {
// // //         console.error(`Failed to fetch image data for PRN: ${prn}`);
// // //         return null;
// // //       }
// // //     } catch (error) {
// // //       console.error(`Error fetching image data for PRN: ${prn}`, error);
// // //       return null;
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Get All Students Data and Images</h2>
// // //       {students.map((student) => (
// // //         <div key={student.prn}>
// // //           <p>PRN: {student.prn}</p>
// // //           <p>Name: {student.name}</p>
// // //           <p>Address: {student.address}</p>
// // //           {/* Render other student data fields as needed */}
// // //           <img
// // //             src={fetchImageData(student.prn)}
// // //             alt={`Student ${student.prn}`}
// // //             style={{ width: "200px", height: "200px" }}
// // //           />
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default SgetStud;
// // import React, { useState, useEffect } from "react";

// // const SgetStud = () => {
// //   const [students, setStudents] = useState([]); // State to store student data
// //   const [imageUrls, setImageUrls] = useState({}); // State to store image URLs

// //   // Function to fetch all student data
// //   const fetchStudentsData = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/studinfo");
// //       if (response.ok) {
// //         const data = await response.json();
// //         setStudents(data); // Set student data
// //       } else {
// //         console.error("Failed to fetch student data");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching student data:", error);
// //     }
// //   };

// //   // Function to fetch image URLs for all students
// //   const fetchImageUrls = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/getAllImageUrls");
// //       if (response.ok) {
// //         const data = await response.json();
// //         setImageUrls(data); // Set image URLs
// //       } else {
// //         console.error("Failed to fetch image URLs");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching image URLs:", error);
// //     }
// //   };

// //   // Fetch all student data and image URLs when component mounts
// //   useEffect(() => {
// //     fetchStudentsData();
// //     fetchImageUrls();
// //     console.log(imageUrls);
// //   }, []);

// //   return (
// //     <div>
// //       <h2>All Students Data and Images</h2>
// //       {students.map((student) => (
// //         <div key={student.prn}>
// //           <p>PRN: {student.prn}</p>
// //           <p>Name: {student.name}</p>
// //           <p>Address: {student.address}</p>
// //           {/* Render other student data fields as needed */}
// //           {imageUrls[student.img] && (
// //             <img src={imageUrls[student.img]} alt="Student" />
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default SgetStud;
// import React, { useState, useEffect } from "react";

// const SgetStud = () => {
//   const [students, setStudents] = useState([]); // State to store student data
//   const [imageUrls, setImageUrls] = useState({}); // State to store image URLs

//   // Function to fetch all student data
//   const fetchStudentsData = async () => {
//     fetchImageUrls();

//     try {
//       const response = await fetch("http://localhost:5000/studinfo");
//       if (response.ok) {
//         const data = await response.json();
//         setStudents(data); // Set student data
//         // console.log(data);
//       } else {
//         console.error("Failed to fetch student data");
//       }
//     } catch (error) {
//       console.error("Error fetching student data:", error);
//     }
//   };

//   // Function to fetch image URLs for all students
//   const fetchImageUrls = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/getAllImageUrls");
//       if (response.ok) {
//         const data = await response.json();
//         setImageUrls(data); // Set image URLs
//         console.log(data);
//       } else {
//         console.error("Failed to fetch image URLs");
//       }
//     } catch (error) {
//       console.error("Error fetching image URLs:", error);
//     }
//   };

//   // Fetch all student data and image URLs when component mounts
//   useEffect(() => {
//     fetchStudentsData();
//     fetchImageUrls();
//   }, []);

//   return (
//     <div>
//       <h2>All Students Data and Images</h2>
//       {students.map((student) => (
//         <div key={student.prn}>
//           <p>PRN: {student.prn}</p>

//           {/* {imageUrls[student.img] && ( */}
//           <img
//             src={`http://localhost:5000/${imageUrls[student.prn]}`}
//             // src={`http://localhost:5000/${student.prn}.png`}
//             alt={``} // Use student image filename as alt text
//           />
//           {/* //   )} */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SgetStud;
import React, { useState, useEffect } from "react";

const SgetStud = () => {
  const [students, setStudents] = useState([]); // State to store student data
  const [imageUrls, setImageUrls] = useState({}); // State to store image URLs

  // Function to fetch all student data
  const fetchStudentsData = async () => {
    fetchImageUrls();

    try {
      const response = await fetch("http://localhost:5000/studinfo");
      if (response.ok) {
        const data = await response.json();
        setStudents(data); // Set student data
      } else {
        console.error("Failed to fetch student data");
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  // Function to fetch image URLs for all students
  const fetchImageUrls = async () => {
    try {
      const response = await fetch("http://localhost:5000/getAllImageUrls");
      if (response.ok) {
        const data = await response.json();
        setImageUrls(data);
        console.log(data); // Set image URLs
      } else {
        console.error("Failed to fetch image URLs");
      }
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    }
  };

  // Fetch all student data and image URLs when component mounts
  useEffect(() => {
    fetchStudentsData();
  }, []);

  return (
    <div>
      <h2>All Students Data and Images</h2>
      {students.map((student) => (
        <div key={student.prn}>
          <p>PRN: {student.prn}</p>
          <p>Name: {student.name}</p>
          <p>Address: {student.address}</p>
          {/* Render other student data fields as needed */}
          {imageUrls[student.prn] && (
            <img
              src={`http://localhost:5000/${imageUrls[student.prn].filename}.${
                imageUrls[student.prn].extension
              }`}
              alt={`Student ${student.prn}`}
              style={{ width: "200px", height: "200px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SgetStud;
