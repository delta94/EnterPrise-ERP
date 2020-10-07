import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Database from "./pages/Database";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";
import Report from "./pages/Report";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Header from "./components/Header";
import Createtable from "./pages/Createtable";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import SignUp from "./pages/SignUp";
import { db } from "./firebase";
import History from "./pages/History";
//just test page delete while production
import EditTable from "./pages/EditTable";

function App() {
  const [{ user, user_details }, dispatch] = useStateValue();

  useEffect(() => {
    //only runs once when app loads
    auth.onAuthStateChanged((user) => {
      if (user) {
        //the use logged in or was logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/Database">
            {user ? (
              <div>
                <Header />
                <Database />
              </div>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/Orders">
            {user ? (
              <div>
                <Header />
                <Orders />
              </div>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/Analytics">
            {user ? (
              <div>
                <Header />
                <Analytics />
              </div>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/Help">
            {user ? (
              <div>
                <Header />
                <Help />
              </div>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/Report">
            {user ? (
              <div>
                <Header />
                <Report />
              </div>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/History">
            {user ? (
              <div>
                <Header />
                <History />
              </div>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/Profile">
            {user ? (
              <div>
                <Header />
                <Profile />
              </div>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/Createtable">
            {user ? (
              <div>
                <Header />
                <Createtable />
              </div>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/EditTable">
            {user ? (
              <div>
                <Header />
                <EditTable />
              </div>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/">
            {user ? (
              <div>
                <Header />
                <Homepage />
              </div>
            ) : (
              <Login />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
