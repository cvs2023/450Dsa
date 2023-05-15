import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { dataObj } from "../../data/data";
import { questionsBank } from "../../data/questionBank";
const Advanced = () => {
  const [data, setData] = useState(dataObj);
  const [show, setShow] = useState(true);
  const [question, setQuestion] = useState(questionsBank);

  const handleChoseCard = (topicName) => {
    const respQuestionsBank = questionsBank.filter((i) => i.name == topicName);
    setQuestion(respQuestionsBank);

    setShow(false);

    //scroll down
    scrollTo();
    function scrollTo() {
      const section = document.getElementById("scroll");
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const respDataObj = dataObj.filter((i) => i.level == "Advanced");
    setData(respDataObj);
  }, []);

  return (
    <div>
      {/* next child */}
      {show ? (
        <div className="main-container">
          <div className="container">
            {data.map((i, index) => {
              return (
                <div key={index}>
                  <Link className="" to={`/Advanced/${i.topic}`}>
                    <div
                      onClick={() => handleChoseCard(i.topic)}
                      className="grid-child "
                    >
                      <div className=" text-deco">SOLVE NOW</div>
                      <div>{i.topic}</div>
                      <div> Total {i.questions}</div>
                      <div> Solved {i.id} </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="main-container">
          <div className="container">
            <div className="">
              <div className="flex ">
                <Link to="/Advanced">
                  <button onClick={() => setShow(true)}>Back</button>
                </Link>
              </div>

              <div className="box">
                {question.map((i, index) => {
                  return (
                    <div key={index}>
                      <div className="box-questions"> {i.name}</div>
                      <div className="">
                        {i.questions.map((j, idx) => {
                          return (
                            <div key={idx} className="flex-inside">
                              <div>{i.id} :</div>
                              <a href={j.link} target="blank">
                                <div>{j.title ? j.title : "null"}</div>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Advanced;
