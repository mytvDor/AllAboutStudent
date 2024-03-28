// // // import { createSlice } from "@reduxjs/toolkit";

// // // const initialState = {
// // //   hi: 12,
// // // };

// // // const studentSlice = createSlice({
// // //   name: "student",
// // //   initialState,
// // //   reducers: {
// // //     inc(state, action) {
// // //       state.hi = action.payload + state.hi;
// // //       console.log(state.hi, action.payload);
// // //     },
// // //   },
// // // });

// // // export const { inc } = studentSlice.actions;

// // // export default studentSlice.reducer;

// // // actions.js

// // // studentSlice.js

// // // student.js

// // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // export const fetchStudentsAc = createAsyncThunk(
// //   "student/fetchStudentsAc",
// //   async () => {
// //     const response = await fetch("http://localhost:5000/studentsAc");
// //     if (!response.ok) {
// //       throw new Error("Failed to fetch data");
// //     }
// //     return response.json();
// //   }
// // );

// // export const fetchStudents = createAsyncThunk(
// //   "student/fetchStudents",
// //   async () => {
// //     const response = await fetch("http://localhost:5000/studinfo");
// //     if (!response.ok) {
// //       throw new Error("Failed to fetch data");
// //     }
// //     return response.json();
// //   }
// // );

// // export const fetchStudentsFee = createAsyncThunk(
// //   "student/fetchStudentsFee",
// //   async () => {
// //     const response = await fetch("http://localhost:5000/");
// //     if (!response.ok) {
// //       throw new Error("Failed to fetch data");
// //     }
// //     return response.json();
// //   }
// // );

// // const initialState = {
// //   students: [],
// //   studentsinfo: [],
// //   studentFee: [],
// //   loading: false,
// //   error: null,
// // };

// // const student = createSlice({
// //   name: "student",
// //   initialState,
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchStudentsAc.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //       })
// //       .addCase(fetchStudentsAc.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.error = null;
// //         state.students = action.payload;
// //       })
// //       .addCase(fetchStudentsAc.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.error.message;
// //       })

// //       //info

// //       .addCase(fetchStudents.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //       })
// //       .addCase(fetchStudents.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.error = null;
// //         state.studentsinfo = action.payload;
// //       })
// //       .addCase(fetchStudents.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.error.message;
// //       })

// //       //fees

// //       .addCase(fetchStudentsFee.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //       })
// //       .addCase(fetchStudentsFee.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.error = null;
// //         state.studentFee = action.payload;
// //       })
// //       .addCase(fetchStudentsFee.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.error.message;
// //       });
// //   },
// // });

// // export const studentReducer = student.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchAllStudentData = createAsyncThunk(
//   "student/fetchAllStudentData",
//   async () => {
//     try {
//       const studentsResponse = await fetch("http://localhost:5000/studentsAc");
//       if (!studentsResponse.ok) {
//         throw new Error("Failed to fetch students data");
//       }
//       const studentsData = await studentsResponse.json();

//       const infoResponse = await fetch("http://localhost:5000/studinfo");
//       if (!infoResponse.ok) {
//         throw new Error("Failed to fetch student info data");
//       }
//       const infoData = await infoResponse.json();

//       const feeResponse = await fetch("http://localhost:5000/studentFee");
//       if (!feeResponse.ok) {
//         throw new Error("Failed to fetch student fee data");
//       }
//       const feeData = await feeResponse.json();

//       // Combine all arrays into a single array of objects with specified fields
//       const combinedArray = combineData(studentsData, infoData, feeData);

//       return combinedArray;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );

// // Helper function to combine data into single array of objects
// function combineData(studentsData, infoData, feeData) {
//   const combinedArray = [];

//   // Iterate through studentsData and merge corresponding objects from infoData and feeData
//   studentsData.forEach((student) => {
//     const info = infoData.find((info) => info.prn === student.prn);
//     const fee = feeData.find((fee) => fee.prn === student.prn);

//     if (info && fee) {
//       combinedArray.push({
//         prn: student.prn,
//         name: student.name,
//         address: info.address,
//         phone: info.phone,
//         parentphone: info.parentphone,
//         DOB: info.DOB,
//         gender: info.gender,
//         email: info.email,
//         linkedin: info.linkedin,
//         adharnum: info.adharnum,
//         resumelink: info.resumelink,
//         img: info.img,
//         rollnum: student.rollnum,
//         ssc: student.ssc,
//         Hsc: student.Hsc,
//         semwise: student.semwise,
//         cgpa: student.cgpa,
//         backsubjects: student.backsubjects,
//         idcard: {
//           idname: info.idcard.idname,
//           idaddress: info.idcard.idaddress,
//           idDOB: info.idcard.idDOB,
//           idmobile: info.idcard.idmobile,
//           idparentmobile: info.idcard.idparentmobile,
//         },
//         year: fee.year,
//         branch: fee.branch,
//         category: fee.category,
//         scholarships: fee.scholarships,
//         actualfee: fee.actualfee,
//         totalfee: fee.totalfee,
//         remaining: fee.remaining,
//       });
//     }
//   });

//   return combinedArray;
// }

// const initialState = {
//   students: [],
//   loading: false,
//   error: null,
// };

// const student = createSlice({
//   name: "student",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllStudentData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchAllStudentData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.students = action.payload;
//       })
//       .addCase(fetchAllStudentData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const studentReducer = student.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllStudentData = createAsyncThunk(
  "student/fetchAllStudentData",
  async () => {
    try {
      const studentsResponse = await fetch("http://localhost:5000/studentsAc");
      if (!studentsResponse.ok) {
        throw new Error("Failed to fetch students data");
      }
      const studentsData = await studentsResponse.json();
      // console.log(studentsData, studentsData.idcard);
      const infoResponse = await fetch("http://localhost:5000/studinfo");
      if (!infoResponse.ok) {
        throw new Error("Failed to fetch student info data");
      }
      const infoData = await infoResponse.json();
      // console.log(infoData);
      const feeResponse = await fetch("http://localhost:5000/");
      if (!feeResponse.ok) {
        throw new Error("Failed to fetch student fee data");
      }
      const feeData = await feeResponse.json();

      // Combine all arrays into a single array of objects with specified fields
      const combinedArray = combineData(studentsData, infoData, feeData);
      // console.log(combinedArray);
      return combinedArray;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Helper function to combine data into single array of objects
// function combineData(studentsData, infoData, feeData) {
//   const combinedArray = [];

//   studentsData.forEach((student) => {
//     infoData.forEach((info) => {
//       feeData.forEach((fee) => {
//         if (student.prn === info.prn && student.prn === fee.prn) {
//           const combinedObject = {
//             prn: student.prn,
//             name: student.name,
//             address: info.address,
//             phone: info.phone,
//             parentphone: info.parentphone,
//             DOB: info.DOB,
//             gender: info.gender,
//             email: info.email,
//             linkedin: info.linkedin,
//             adharnum: info.adharnum,
//             resumelink: info.resumelink,
//             img: info.img,
//             rollnum: student.rollnum,
//             ssc: student.ssc,
//             Hsc: student.Hsc,
//             semwise: student.semwise,
//             cgpa: student.cgpa,
//             backsubjects: student.backsubjects,
//             // idcard: {
//             //   // idname: info.idcard.idname,
//             //   idaddress: info.idcard.idaddress,
//             //   idDOB: info.idcard.idDOB,
//             //   idmobile: info.idcard.idmobile,
//             //   idparentmobile: info.idcard.idparentmobile,
//             // },
//             // idCard: idCard.idname,
//             year: fee.year,
//             branch: fee.branch,
//             category: fee.category,
//             scholarships: fee.scholarships,
//             actualfee: fee.actualfee,
//             totalfee: fee.totalfee,
//             remaining: fee.remaining,
//           };
//           combinedArray.push(combinedObject);
//         }
//       });
//     });
//   });

//   return combinedArray;
// }

// function combineData(studentsData, infoData, feeData) {
//   // Create hash maps for infoData and feeData based on prn
//   const infoMap = new Map(infoData.map((info) => [info.prn, info]));
//   const feeMap = new Map(feeData.map((fee) => [fee.prn, fee]));

//   const combinedArray = [];

//   // Iterate through studentsData array
//   studentsData.forEach((student) => {
//     const info = infoMap.get(student.prn); // Get corresponding info data from map
//     const fee = feeMap.get(student.prn); // Get corresponding fee data from map

//     // If info and fee data exist for the current student
//     if (info && fee) {
//       const combinedObject = {
//         prn: student.prn,
//         name: student.name,
//         address: info.address,
//         phone: info.phone,
//         parentphone: info.parentphone,
//         DOB: info.DOB,
//         gender: info.gender,
//         email: info.email,
//         linkedin: info.linkedin,
//         adharnum: info.adharnum,
//         resumelink: info.resumelink,
//         img: info.img,
//         rollnum: student.rollnum,
//         ssc: student.ssc,
//         Hsc: student.Hsc,
//         semwise: student.semwise,
//         cgpa: student.cgpa,
//         backsubjects: student.backsubjects,
//         year: fee.year,
//         branch: fee.branch,
//         category: fee.category,
//         scholarships: fee.scholarships,
//         actualfee: fee.actualfee,
//         totalfee: fee.totalfee,
//         remaining: fee.remaining,
//       };
//       combinedArray.push(combinedObject);
//     }

//     console.log(combinedArray);
//   });

//   return combinedArray;
// }

// function combineData(studentsData, infoData, feeData) {
//   // Create hash maps for infoData and feeData based on prn
//   const infoMap = new Map(infoData.map((info) => [info.prn, info]));
//   const feeMap = new Map(feeData.map((fee) => [fee.prn, fee]));

//   const combinedSet = new Set();

//   // Iterate through studentsData array
//   studentsData.forEach((student) => {
//     const info = infoMap.get(student.prn); // Get corresponding info data from map
//     const fee = feeMap.get(student.prn); // Get corresponding fee data from map

//     // If info and fee data exist for the current student
//     if (info && fee) {
//       const combinedObject = {
//         prn: student.prn,
//         name: student.name,
//         address: info.address,
//         phone: info.phone,
//         parentphone: info.parentphone,
//         DOB: info.DOB,
//         gender: info.gender,
//         email: info.email,
//         linkedin: info.linkedin,
//         adharnum: info.adharnum,
//         resumelink: info.resumelink,
//         img: info.img,
//         rollnum: student.rollnum,
//         ssc: student.ssc,
//         Hsc: student.Hsc,
//         semwise: student.semwise,
//         cgpa: student.cgpa,
//         backsubjects: student.backsubjects,
//         year: fee.year,
//         branch: fee.branch,
//         category: fee.category,
//         scholarships: fee.scholarships,
//         actualfee: fee.actualfee,
//         totalfee: fee.totalfee,
//         remaining: fee.remaining,
//       };
//       combinedSet.add(combinedObject);
//     }

//     console.log(combinedSet);
//   });

//   return combinedSet;
// }

function combineData(studentsData, infoData, feeData) {
  // Create hash maps for infoData and feeData based on prn
  const infoMap = new Map(infoData.map((info) => [info.prn, info]));
  const feeMap = new Map(feeData.map((fee) => [fee.prn, fee]));

  const combinedObject = {};

  // Iterate through studentsData array
  studentsData.forEach((student) => {
    const info = infoMap.get(student.prn); // Get corresponding info data from map
    const fee = feeMap.get(student.prn); // Get corresponding fee data from map

    // If info and fee data exist for the current student
    if (info && fee) {
      combinedObject[student.prn] = {
        prn: student.prn,
        name: student.name,
        address: info.address,
        phone: info.phone,
        parentphone: info.parentphone,
        DOB: info.DOB,
        gender: info.gender,
        email: info.email,
        linkedin: info.linkedin,
        adharnum: info.adharnum,
        resumelink: info.resumelink,
        img: info.img,
        rollnum: student.rollnum,
        ssc: student.ssc,
        Hsc: student.Hsc,
        semwise: student.semwise,
        cgpa: student.cgpa,
        backsubjects: student.backsubjects,
        year: fee.year,
        branch: fee.branch,
        category: fee.category,
        scholarships: fee.scholarships,
        actualfee: fee.actualfee,
        totalfee: fee.totalfee,
        remaining: fee.remaining,
      };
    }
  });

  return combinedObject;
}

const initialState = {
  students: {},
  loading: false,
  error: null,
};

const student = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStudentData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllStudentData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.students = action.payload;
      })
      .addCase(fetchAllStudentData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const studentReducer = student.reducer;
