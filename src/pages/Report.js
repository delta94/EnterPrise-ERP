import React from "react";
import Sidebar from "../components/Sidebar";
import "./Report.css";

function Report() {
  return (
    <div className="report">
      <div className="report__container">
        <Sidebar className="report__sidebar" />
        <div className="report__body">
          <h1>Report Page 🚀</h1>
          <div className="report__body__pdf">
            <h3>Automatic Report Generation</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
