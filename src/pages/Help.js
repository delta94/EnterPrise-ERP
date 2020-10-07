import React from "react";
import Sidebar from "../components/Sidebar";
import "./Help.css";

function Help() {
  return (
    <div className="help">
      <div className="help__container">
        <Sidebar className="help__sidebar" />
        <div className="help__body">
          <h1>Help 🚀</h1>
          <h4>
            This is a Delopyment Version hosted on FireBase 🔥. Please Download
            the repo and install if you want to make changes and use.
          </h4>
          <h4>Visit Git Hub Repo for Detailed Instructions 😄</h4>
        </div>
      </div>
    </div>
  );
}

export default Help;
