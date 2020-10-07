import React from "react";
import "./SidebarOption.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

function SidebarOption({ title }) {
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
    <div className="sidebaroption" onClick={addToHistory}>
      <h4>{title}</h4>
      <StarIcon className="sidebaroption__icon" />
    </div>
  );
}

export default SidebarOption;
