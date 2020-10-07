import React from "react";
import "./InfoHolder.css";

function InfoHolder({ text, item }) {
  return (
    <div className="infoholder">
      <div className="infoholder__container">
        <h4>{item}</h4>
        <h4>{text}</h4>
      </div>
    </div>
  );
}

export default InfoHolder;
