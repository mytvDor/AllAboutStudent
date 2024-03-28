import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sform from "../src/StudinfoComponents/Sform";
import AcForm from "./components/AcForm";
import UpdateForm from "../src/component/UpdateForm";
// import UpdateForm from "../src/component/UpdateForm";
import Form from "./component/Form";
// import UpdateForm from "./component/UpdateForm";
import ViewForm from "../src/component/ViewForm";
import FeeUpdate from "../src/component/FeeUpdate";
import StudentTable from "../src/component/StudentTable";
import SgetStud from "../src/StudinfoComponents/SgetStud";
import AcgetOne from "./components/AcgetOne";
import AcgetAll from "./components/AcgetAll";
import StudentDataComponent from "./redux/StudentDataComponent";
import Dahboard from "./redux/Dahboard";

import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom";
import DashBrdInfo from "./redux/DashBrdInfo";
import Navbar from "./Navbar";
import Card from "./redux/Card";
import VNav from "./VNav";
// import ReduxTest from "./redux/ReduxTest";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Sform />

      <AcForm></AcForm>
      <Form></Form> */}
      {/* <AcupForm /> */}

      {/* <UpdateForm /> */}
      {/* <UpdateForm /> */}
      {/* <SgetStud />
      <ViewForm />
      <AcgetAll /> */}
      {/* <FeeUpdate /> */}

      {/* <StudentTable /> */}

      {/* <ReduxTest /> */}

      {/* <StudentDataComponent /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dahboard />} />
          <Route path="/" element={<StudentDataComponent />} />
          <Route path="/studentinfo" element={<Sform />} />
          <Route path="/studAcadamic" element={<AcForm />} />
          <Route path="/studfee" element={<Form />} />
        </Routes>
      </BrowserRouter>
      {/* <VNav></VNav> */}
      {/* <Card></Card> */}

      {/* <Navbar></Navbar> */}
    </>
  );
}

export default App;
