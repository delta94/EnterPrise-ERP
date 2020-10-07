import React from "react";
import "./Widget.css";
import { useStateValue } from "../StateProvider";

function Widget({ title, image }) {
  const [{ history }, dispatch] = useStateValue();

  const addToHistory = () => {
    // dipatch the item into the data layer
    dispatch({
      type: "ADD_TO_HISTORY",
      item: {
        title: title,
      },
    });
  };
  return (
    <div className="widget">
      <button className="widget__button" onClick={addToHistory}>
        <img src={image}></img>
        <h1>{title}</h1>
      </button>
    </div>
  );
}

export default Widget;
