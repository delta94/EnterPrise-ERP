import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ user, user_details }, dispatch] = useStateValue();
  const myFunction = () => {
    document
      .querySelector(".header__dropdown__content")
      .classList.toggle("show");
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      console.log("singed Out");
    }
  };

  return (
    <nav className="header">
      <div className="header__items">
        <div className="header__left">
          {/* Logo on the left */}
          <Link to="/">
            <img className="header__logo" src="/logo.png" alt="Logo"></img>
          </Link>
          <p>Business Management Platform</p>
        </div>
        <div className="header__right">
          <div className="header__dropdown">
            <button className="header__dropdown_btn" onClick={myFunction}>
              {/* User */}
              <Avatar
                className="header__avatar"
                alt="User Name"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              />
              <p>{user_details.FirstName ? `${user_details.FirstName}` : ""}</p>
              <ArrowDropDownIcon className="header__dropdown__arrow" />
              <div class="header__dropdown__content">
                <Link to="/Profile">
                  <a>Profile</a>
                </Link>
                <Link to={!user && "/"}>
                  <div onClick={handleAuthentication}>
                    <a>{user ? "Sign Out" : "Sign In"}</a>
                  </div>
                </Link>
              </div>
            </button>
          </div>
          <Link to="/" style={{ textDecoration: "none" }}></Link>
        </div>
      </div>
      <div className="header__line"></div>
    </nav>
  );
}

export default Header;
