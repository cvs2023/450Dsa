import React, { useEffect, useState } from "react";
import Nest from "./nest";
import { Topic } from "./topics";
const Arrays = ({ select }) => {
  const [data, setData] = useState("");
  //fetch data of this topic and pass to jsx

  useEffect(() => {
    const topic = select?.topic;
    setData(topic);
  }, []);
  return (
    <div>
      <div>{data ? <Nest select={select} /> : <Topic />}</div>
    </div>
  );
};

export default Arrays;
