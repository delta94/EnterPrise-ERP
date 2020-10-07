import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./Profile.css";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import InfoHolder from "../components/InfoHolder";
import Paper from "@material-ui/core/Paper";
import { Avatar } from "@material-ui/core";

function Profile() {
  const [Info, setInfo] = useState({
    Email: "",
    LastName: "",
    FirstName: "",
    UID: "",
  });
  const [{ user, user_details }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => {
          setInfo(doc.data().data);
        });
    }
  }, [0]);

  return (
    <div className="profile">
      <div className="profile__container">
        <Sidebar className="profile__sidebar" />
        <div className="profile__body">
          <h1>Profile Page 🚀</h1>
          <div className="profile__body__flex">
            <Paper elevation={5} className="profile__body__flex__paper">
              <Avatar
                className="profile__avatar"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                alt={`${Info.FirstName}`}
              />
              <div className="profile__body__flex__text">
                <InfoHolder text={Info.FirstName} item={"First Name"} />
                <InfoHolder text={Info.LastName} item={"Last Name"} />
                <InfoHolder text={Info.Email} item={"Email"} />
                <InfoHolder text={Info.UID} item={"ID"} />
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
