import React from "react";
import zoomcall from "../images/zoomcall.png";
import ClickScore from "./ClickScore";
import BackgroundImage from "./BackgroundImage";
import Timer from "./Timer";
import LeftArrow from "./LeftArrow";
import { Link } from "react-router-dom";
import ScoreProvider from "./ScoreProvider";

const ZoomCall2Countdown = () => {
  return (
    <ScoreProvider>
      <div>
        <BackgroundImage src={zoomcall} />
        <Timer taskNumber={2} numberOfAnswers={3} />
        <ClickScore taskNumber={2} numberOfAnswers={3} />

        <Link to="/readingtheroom">
          <LeftArrow />
        </Link>
      </div>
    </ScoreProvider>
  );
};

export default ZoomCall2Countdown;
