import React from "react";
import { Link } from "react-router-dom";

export const SecondNav = () => {
  return (
    <div className="navbar">
      <div className="second-nav">
        <Link>Beginner</Link>
        <Link>Medium</Link>
        <Link>Advanced</Link>
      </div>
    </div>
  );
};
/*
The first set of curly braces in the inline style marks the beginning of an expression and the second set of curly braces is the object containing styles and values.
*/
