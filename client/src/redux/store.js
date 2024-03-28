import { configureStore } from "@reduxjs/toolkit";

import { studentReducer } from "./student"; // Updated import statement
const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export default store;
