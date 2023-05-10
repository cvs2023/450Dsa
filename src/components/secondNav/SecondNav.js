import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { secondNavData } from "../../data/secondNavData";
export const SecondNav = () => {
  const [levelData, setLevelData] = useState("");

  const handleClick = (levelSelected) => {
    // const resp = dataObj.filter((i) => i.level == levelSelected);
    // console.log(resp);
    console.log("chla  ", levelSelected);
    setLevelData(levelSelected);
  };

  useEffect(() => {
    handleClick();
  });
  return (
    <>
      <div className="navbar">
        <div className="second-nav">
          {secondNavData.map((i, index) => {
            return (
              <div onClick={() => handleClick(i.name)} key={index}>
                <Link>{i.name}</Link>
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
