import React, { useState } from "react";
import { dataObj } from "../data/data";
import SelectedTopic from "./selectedTopic";
import { Link } from "react-router-dom";
import Arrays from "./arrays";

export const Topic = () => {
  const [data, setData] = useState(dataObj);
  const [select, setSelect] = useState({});
  const [show, setShow] = useState(true);

  const handleClick = (i) => {
    setSelect(i);
    setShow(false);
  };

  return (
    <div className="grid">
      {show &&
        data.map((i) => {
          return (
            <>
              <Link to={i.topic}>
                <div onClick={() => handleClick(i)} className="grid-child">
                  <div>{i.topic}</div>
                  <div> {i.questions}</div>
                  <div> {i.id} </div>
                </div>
              </Link>
            </>
          );
        })}

      {show == false ? <Arrays select={select} show={show} /> : ""}
    </div>
  );
};
