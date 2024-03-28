import React from "react";
import "./VNav.css";
import { IoHome } from "react-icons/io5";
import { TbDashboard } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi";
import { TbReportMoney } from "react-icons/tb";

const VNav = () => {
  return (
    <div>
      <nav className="vNav">
        <input type="checkbox" id="click" />

        <label htmlFor="click" className="check">
          <div className="menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </label>
        <div className="un">
          <ul className="uli">
            <div className="hii">
              <a className="nvbtni" to="/">
                <IoHome />
              </a>
            </div>
            <div className="hii">
              <a className="nvbtni" to="/dashboard">
                <TbDashboard />
              </a>
            </div>
            <div className="hii">
              <a className="nvbtni" to="/studentinfo">
                <TbListDetails />
              </a>
            </div>
            <div className="hii">
              <a className="nvbtni" to="/studAcadamic">
                <HiAcademicCap />
              </a>
            </div>
            <div className="hii">
              <a className="nvbtni" to="/studfee">
                <TbReportMoney />
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default VNav;
