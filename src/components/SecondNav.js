import React from "react";
import { Link } from "react-router-dom";

export const SecondNav = () => {
  return (
    <div>
      <div className="second-nav">
        <Link style={{ textDecoration: "none" }}>
          <p className=""> All</p>
        </Link>
        <Link style={{ textDecoration: "none" }}>
          <p className=""> Beginner</p>
        </Link>
        <Link style={{ textDecoration: "none" }}>
          <p className=""> Medium</p>
        </Link>
        <Link style={{ textDecoration: "none" }}>
          <p className=""> Advanced</p>
        </Link>
      </div>
    </div>
  );
};
/*
The first set of curly braces in the inline style marks the beginning of an expression and the second set of curly braces is the object containing styles and values.
*/
