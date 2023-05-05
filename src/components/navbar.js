import React, { useState } from "react";
import logo1 from "../data/logo1.jpg";
import { Link } from "react-router-dom/dist";
export const Navbar = () => {
  const path = window.location.pathname;
  // console.log(path);

  return (
    <div className="navbar">
      {/* <div className="first">
        <Link to="/home">
          <img className="img-logo" src={logo1} />{" "}
        </Link>
      </div> */}
      <div className="second">
        {/* <p className="you-can">You can</p> */}
        {/* <Link to="/home">Home </Link> */}
        <div> "मुस्कुराते चलो , बढ़ते चलो ।"</div>
        {/* <button>Home</button>
        <button>Login</button>
        <button>Signup</button> */}
      </div>
    </div>
  );
};
