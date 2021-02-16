import React from "react";
import leftArrow from "../../images/leftArrow.svg";
import { useHistory } from "react-router-dom";

const LeftArrow = () => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/readingtheroom");
  };
  return (
    <div onClick={clickHandler}>
      <img className="left-arrow" src={leftArrow} alt="left-arrow" />
    </div>
  );
};

export default LeftArrow;
