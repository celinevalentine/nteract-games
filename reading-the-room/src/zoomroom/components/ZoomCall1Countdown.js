import React, { useState } from "react";
import zoomcall from "../images/zoomcall.png";
import BackgroundImage from "./BackgroundImage";
import Timer from "./Timer";
import LeftArrow from "./LeftArrow";
import { Link, useParams } from "react-router-dom";
import ClickScore from "./ClickScore";
// import FailScreen from "./FailScreen";
// import ScoreProvider from "./ScoreProvider";

const ZoomCall1Countdown = ({ numberOfAnswers = [] }) => {
  const [clickScore, setClickScore] = useState(0);
  const [hide, setHide] = useState(true);

  const updateClickScore = (score) => {
    setClickScore(score);
  };
  // const { taskNumber } = useParams();
  // const hideFailScreen = () => {
  //   if (clickScore < numberOfAnswers) {
  //     setHide(false);
  //   } else {
  //     setHide(true);
  //   }
  return (
    // <ScoreProvider>
    <div>
      <BackgroundImage src={zoomcall} usemap="zoomcall" />
      <Timer taskNumber={1} clickscore={updateClickScore} numberOfAnswers={3} />
      <ClickScore
        taskNumber={1}
        numberOfAnswers={3}
        clickscore={updateClickScore}
      />
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
      {/* <FailScreen /> */}
    </div>
    // </ScoreProvider>
  );
};

export default ZoomCall1Countdown;
