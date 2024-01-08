import React from "react";
import "./Home.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const Home = () => {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const main = document.getElementById("main");

  signUpButton.addEventListener('click', () => {
    main.classList.add("right-panel-active");
  });
  signInButton.addEventListener('click', () => {
    main.classList.remove("right-panel-active");
  });

  return (
    <div className="container" id="main">
      <div className="sign-up">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <GoogleIcon />
            </a>
            <a href="#">
              <LinkedInIcon />
            </a>
          </div>
          <span>or use email for registration</span>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button>Sign-Up</button>
        </form>
      </div>

      <div className="sign-in">
        <form action="#">
          <h1>Login</h1>
          <div className="social-container">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <GoogleIcon />
            </a>
            <a href="#">
              <LinkedInIcon />
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <a href="#">Forgot your password</a>
          <button>Login</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-left">
            <h1>Welcome Back</h1>
            <p>
              To Keep connected with us please login with your personal info
            </p>
            <button className="signIn" id="signIn">
              Sign In
            </button>
          </div>

          <div className="overlay-right">
            <h1>Hello, Friend</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="signUp" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;