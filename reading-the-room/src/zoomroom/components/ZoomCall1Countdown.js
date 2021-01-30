import React from "react";
import zoomcall from "../images/zoomcall.png";
import BackgroundImage from "./BackgroundImage";
import Timer from "./Timer";
import LeftArrow from "./LeftArrow";
import { Link } from "react-router-dom";
import ClickScore from "./ClickScore";
import ScoreProvider from "./ScoreProvider";

const ZoomCall1Countdown = () => {
  return (
    <ScoreProvider>
      <div>
        <BackgroundImage src={zoomcall} usemap="zoomcall" />
        <Timer taskNumber={1} numberOfAnswers={3} />
        <ClickScore taskNumber={1} numberOfAnswers={3} />
        <Link to="/readingtheroom">
          <LeftArrow />
        </Link>
      </div>
    </ScoreProvider>
  );
};

export default ZoomCall1Countdown;
