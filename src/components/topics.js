import React, { useEffect, useState } from "react";
import { dataObj } from "../data/data";
import { Link } from "react-router-dom";
import Nest from "./nest";

export const Topic = ({ levelData }) => {
  console.log({ levelData });
  const [data, setData] = useState(dataObj);
  const [selectTopic, setSelectTopic] = useState("");
  const [show, setShow] = useState(true);

  const handleClick = (i) => {
    setSelectTopic(i?.topic);
    setShow(!show);
  };

  const handleClickShow = () => {
    setShow(false);
  };

  return (
    <div className="main-container">
      <div className="container">
        {show ? (
          data.map((i, index) => {
            return (
              <div key={index}>
                <Link className="" to={`/${i.topic}`}>
                  <div onClick={() => handleClick(i)} className="grid-child ">
                    <div className=" text-deco">SOLVE NOW</div>
                    <div>{i.topic}</div>
                    <div> Total {i.questions}</div>
                    <div> Solved {i.id} </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <Nest
            selectTopic={selectTopic}
            handleClickShow={handleClickShow}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};
