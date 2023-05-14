import React, { useEffect, useMemo, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { secondNavData } from "../../data/secondNavData";

export const SecondNav = () => {
  return (
    <>
      <div className="navbar">
        <div className="second-nav">
          {secondNavData.map((i, index) => {
            return (
              <div key={index}>
                <Link to={i.name}>{i.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
/*
The first set of curly braces in the inline style marks the beginning of an expression and the second set of curly braces is the object containing styles and values.
*/
