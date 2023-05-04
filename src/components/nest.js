import React, { useEffect, useState } from "react";

const Nest = ({ select }) => {
  return <div>Nested of {select?.topic}</div>;
};

export default Nest;
