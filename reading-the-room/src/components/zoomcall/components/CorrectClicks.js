import React from "react";
// import scoreBox from "../images/scoreBox.png";

const CorrectClicks = ({ score = 0 }) => {
  return (
    <div className="score-box">
      <p id="score">{`${score}/5`}</p>
      {/* <img src={scoreBox} alt="score-box" /> */}
    </div>
  );
};

export default CorrectClicks;
