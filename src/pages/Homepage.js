import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Homepage.css";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";

function Homepage() {
  const [{ user, user_details }, dispatch] = useStateValue();
  const [Info, setInfo] = useState({
    Email: "",
    LastName: "",
    FirstName: "",
    UID: "",
  });

  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        setInfo(doc.data().data);
      });
  }, [0]);

  useEffect(() => {
    dispatch({
      type: "SET_USER_DETAILS",
      Info: Info,
    });
    console.log(Info);
  }, [Info]);

  return (
    <div className="homepage">
      <div className="homepage__container">
        <Sidebar className="homepage__sidebar" />
        <div className="homepage__body">
          <h1>{Info.FirstName ? `Hello ${Info.FirstName},` : "Hello"}</h1>
          <h4>Modernize your business management with Enterprise platform.</h4>

          <div className="homepage__body__dashboard">
            <Link to="Createtable">
              <Widget
                className="homepage__widget"
                title="Create Table"
                image="https://img.icons8.com/nolan/96/table-1.png"
              />
            </Link>
            <Link to="/Database">
              <Widget
                className="homepage__widget"
                title="Database"
                image="https://img.icons8.com/nolan/96/database.png"
              />
            </Link>
            <Link to="Profile">
              <Widget
                className="homepage__widget"
                title="Profile"
                image="https://img.icons8.com/nolan/96/settings--v1.png"
              />
            </Link>
          </div>
          <div className="homepage__body__dashboard">
            <Link to="/Analytics">
              <Widget
                className="homepage__widget"
                title="Analytics"
                image="https://img.icons8.com/nolan/96/combo-chart.png"
              />
            </Link>
            <Link to="/History">
              <Widget
                className="homepage__widget"
                title="History"
                image="https://img.icons8.com/nolan/96/time-machine.png"
              />
            </Link>
            <Link to="/Help">
              <Widget
                className="homepage__widget"
                title="Help"
                image="https://img.icons8.com/nolan/96/help.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
