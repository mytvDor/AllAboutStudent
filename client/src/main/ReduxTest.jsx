import React from "react";
import { useDispatch } from "react-redux";

import { inc } from "../redux/student";
const ReduxTest = () => {
  const dispatch = useDispatch();

  const handleClk = () => {
    dispatch(inc(12));
  };

  return (
    <div>
      <button onClick={handleClk}></button>
    </div>
  );
};

export default ReduxTest;
