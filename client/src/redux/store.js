import { configureStore } from "@reduxjs/toolkit";

import { studentReducer } from "./student";
const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export default store;
