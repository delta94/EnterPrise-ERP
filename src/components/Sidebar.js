import React from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import ListIcon from "@material-ui/icons/List";
import StarIcon from "@material-ui/icons/Star";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SidebarOption from "./SidebarOption.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Sidebar() {
  const list_options = [
    { name: "Homepage" },
    { name: "Orders" },
    { name: "Database" },
    { name: "Analytics" },
    //{ name: "Report" },
    { name: "History" },
    { name: "Help" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__box__holder">
        {/*
        <div className="sidebar__input__holder">
          <SearchIcon />
          <input type="text" placeholder="Filter navigator"></input>
        </div>*/}
      </div>

      {/* Sidebar Icons */}
      <div className="sidebar__icons">
        <ListIcon className="sidebar__icons__links" id="icon_1" />
        <StarIcon className="sidebar__icons__links" id="icon_2" />
        {/*
        <!QueryBuilderIcon
          className="sidebar__icons__links"
          id="icon_3"
        /> */}
      </div>

      {/* Sidebar Line 😴 */}
      <hr />

      {/* Sidebar list holder */}

      <div className="sidebar__list">
        {list_options?.map((list_options) => (
          <Link to={`/${list_options.name}`} className="sidebar__list__links">
            <SidebarOption title={list_options.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
