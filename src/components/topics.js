import React, { useState } from "react";
import { dataObj } from "../data/data";
import SelectedTopic from "./selectedTopic";
import { Link } from "react-router-dom";
import Arrays from "./arrays";
import { Ref } from "react";
import Nest from "./nest";
export const Topic = () => {
  const [data, setData] = useState(dataObj);
  const [select, setSelect] = useState({});
  const [show, setShow] = useState(true);

  const handleClick = (i) => {
    setSelect(i);
    setShow(!show);
  };
  console.log({ show });
  return (
    <div className="grid">
      {show ? (
        data.map((i) => {
          return (
            <>
              <Link className="text-deco" to={`/${i.topic}`}>
                <div onClick={() => handleClick(i)} className="grid-child">
                  <div>{i.topic}</div>
                  <div> Total {i.questions}</div>
                  <div> Solved {i.id} </div>
                </div>
              </Link>
            </>
          );
        })
      ) : (
        <Nest select={select} handleClick={handleClick} />
      )}
    </div>
  );
};
