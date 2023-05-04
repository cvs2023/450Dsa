import React, { useState } from "react";
import Nest from "./nest";

const Arrays = ({ select }) => {
  const topic = select?.topic;

  //fetch data of this topic and pass to jsx
  // console.log(topic);

  return (
    <div>
      <div>{topic && <Nest select={select} />}</div>
    </div>
  );
};

export default Arrays;
