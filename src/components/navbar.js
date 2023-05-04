import React from "react";
import logo1 from "../data/logo1.jpg";
import { Link } from "react-router-dom/dist";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="first">
        {" "}
        <img className="img-logo" src={logo1} />
      </div>
      <div className="second">
        <p className="you-can">You can</p>
        {/* <Link to="/home">Home </Link> */}
        <p>Home</p>

        <p>Login</p>
        <p>Signup</p>
      </div>
    </div>
  );
};
