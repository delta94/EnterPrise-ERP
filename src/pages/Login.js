import React, { useState, useEffect } from "react";
import "./Login.css";
import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";

function Login() {
  const user_history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{ user, user_details }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //the use logged in or was logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      }
    });
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        user_history.push("/Homepage");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img className="login__logo" src="/logo_login.png" alt="Logo"></img>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
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
          <button className="login__signin__btn" onClick={signIn} type="submit">
            Sign In
          </button>
        </form>
        <p>
          By Signing-in you agree to the Enterprise Platform Conditions of Use.
          Please see our Privacy Notice, our Cookies Notice.
        </p>
        <Link to="./SignUp">
          <button className="login__register__btn">Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
