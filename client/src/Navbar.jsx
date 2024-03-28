// Navbar.js

import React from "react";
import "./Navbar.css"; // Import the CSS file
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {" "}
      <nav>
        <div className="logo">STUDENT</div>
        {/* <input type="text" /> */}

        <input type="checkbox" id="click" />

        <label htmlFor="click" className="check">
          <div className="menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </label>
        <div className="un">
          <ul>
            <div className="hi">
              <NavLink className="nvbtn" to="/">
                home
              </NavLink>
            </div>
            <div className="hi">
              <NavLink className="nvbtn" to="/dashboard">
                dashboard
              </NavLink>
            </div>
            <div className="hi">
              <NavLink className="nvbtn" to="/studentinfo">
                student details
              </NavLink>
            </div>
            <div className="hi">
              <NavLink className="nvbtn" to="/studAcadamic">
                acadamic
              </NavLink>
            </div>
            <div className="hi">
              <NavLink className="nvbtn" to="/studfee">
                fees
              </NavLink>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
