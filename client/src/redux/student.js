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
      const infoResponse = await fetch("http://localhost:5000/studinfo");
      if (!infoResponse.ok) {
        throw new Error("Failed to fetch student info data");
      }
      const infoData = await infoResponse.json();
      const feeResponse = await fetch("http://localhost:5000/");
      if (!feeResponse.ok) {
        throw new Error("Failed to fetch student fee data");
      }
      const feeData = await feeResponse.json();

      const combinedArray = combineData(studentsData, infoData, feeData);
      return combinedArray;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

function combineData(studentsData, infoData, feeData) {
  const infoMap = new Map(infoData.map((info) => [info.prn, info]));
  const feeMap = new Map(feeData.map((fee) => [fee.prn, fee]));

  const combinedObject = {};

  studentsData.forEach((student) => {
    const info = infoMap.get(student.prn);
    const fee = feeMap.get(student.prn);
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
