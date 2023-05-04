import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nest = ({ select, handleClick }) => {
  const handleBack = () => {
    handleClick();
  };
  return (
    <div className="flex">
      <div>
        <Link to="/home">
          <button onClick={handleBack}>Back</button>
        </Link>
      </div>
      TOPIC &nbsp;{select?.topic}
    </div>
  );
};

export default Nest;
