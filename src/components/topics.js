import React, { useState } from "react";
import { dataObj } from "../data/data";
import SelectedTopic from "./selectedTopic";
import { Link } from "react-router-dom";
import Arrays from "./arrays";
import Nest from "./nest";

export const Topic = () => {
  const [data, setData] = useState(dataObj);
  const [select, setSelect] = useState("");
  const [show, setShow] = useState(true);

  const handleClick = (i) => {
    setSelect(i?.topic);

    setShow(!show);
  };
  return (
    <div className="container">
      {show ? (
        data.map((i) => {
          return (
            <>
              <Link className="" to={`/${i.topic}`}>
                <div onClick={() => handleClick(i)} className="grid-child ">
                  <div className=" text-deco">SOLVE NOW</div>
                  <div>{i.topic}</div>
                  <div> Total {i.questions}</div>
                  <div> Solved {i.id} </div>
                </div>
              </Link>
            </>
          );
        })
      ) : (
        <Nest select={select} show={show} handleClick={handleClick} />
      )}
    </div>
  );
};
