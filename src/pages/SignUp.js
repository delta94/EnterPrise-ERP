import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";

function SignUp() {
  const user_history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // const[message, setmessage] = useState([{usrename: 'sonny, message="hey"}, {username....} ])

  const [{ user, user_details }, dispatch] = useStateValue();

  console.log("👱", user);

  const register = async (e) => {
    // uncomment for production version
    //alert("You are not authorized to create new account Sorry!");
   // {
   //   /* 
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Tit did create a user
        db.collection("users")
          .doc(auth.user.uid)
          .set({
            data: {
              FirstName: firstName,
              LastName: lastName,
              Email: email,
              UID: auth.user.uid,
            },
          });
        console.log(auth);
        user_history.push("/");
      })
      .catch((error) => alert(error.message));
   //   */
  //  }
  };

  return (
    <div className="signup">
      <img className="signup__logo" src="/logo_login.png" alt="Logo"></img>
      <div className="signup__container">
        <h1>Sign Up</h1>
        <form>
          <h5>First Name</h5>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <h5>Last Name</h5>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <p>
          By Signing-in you agree to the Enterprise Platform Conditions of Use.
          Please see our Privacy Notice, our Cookies Notice.
        </p>
        <button className="signup__register__btn" onClick={register}>
          Sign Up
        </button>
        <Link to="./login">
          <button className="signup__signin__btn">Go to Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
