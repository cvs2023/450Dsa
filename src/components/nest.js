import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { questionsBank } from "../data/questionBank";

const Nest = ({ select, handleClick }) => {
  const [data, setData] = useState(questionsBank);

  const handleBack = () => {
    handleClick();
  };
  const fetchRequiredData = () => {
    const resp = data.filter((i) => i.name == select);
    setData(resp);
  };

  useEffect(() => {
    // firstClick();
  }, []);
  return (
    <div className="">
      <div className="flex ">
        <Link to="/home">
          <button onClick={handleBack}>Back</button>
        </Link>
      </div>

      <div className="box">
        {data.map((i) => {
          return (
            <div>
              <div className="box-questions"> {i.name}</div>
              <div className="">
                {i.questions.map((j) => {
                  return (
                    <div className="flex-inside">
                      <div>{j.no} :</div>
                      <a href={j.link} target="blank">
                        <div>Find minimum and maximum element in an array</div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nest;
