import React, { useState } from "react";
import logo1 from "../data/logo1.jpg";
import { Link } from "react-router-dom/dist";

import climbBlue from "../images/climb-blue.png";
export const Navbar = () => {
  const [hover, setHover] = useState(false);
  const path = window.location.pathname;
  // console.log(path);

  return (
    <div className="">
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {hover ? (
          <div className="top">
            "You have a right to perform your prescribed duty, but you are not
            entitled to the fruits of your actions."
          </div>
        ) : (
          <div className="top">कर्मण्येवाधिकारस्ते मां फलेषु कदाचन</div>
        )}
      </div>

      <div className="second-portion">
        <img className="img" src={climbBlue}></img>
      </div>

      <div className="second ">
        <Link className="link-hover" to="/home">
          Home{" "}
        </Link>
        <Link className="link-hover" to="/home">
          Login{" "}
        </Link>
        <Link className="link-hover" to="/home">
          Signup{" "}
        </Link>
      </div>
    </div>
  );
};
