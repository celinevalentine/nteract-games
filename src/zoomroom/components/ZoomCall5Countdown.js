import React from "react";
import zoomcall from "../images/zoomcall.png";
import ClickScore from "./ClickScore";
import BackgroundImage from "./BackgroundImage";
import Timer from "./Timer";
import LeftArrow from "./LeftArrow";
import { Link } from "react-router-dom";
import ScoreProvider from "./ScoreProvider";

const ZoomCall5Countdown = () => {
  return (
    <ScoreProvider>
      <div>
        <BackgroundImage src={zoomcall} />
        <Timer taskNumber={5} />
        <ClickScore taskNumber={5} numberOfAnswers={1} />
        <Link to="/readingtheroom">
          <LeftArrow />
        </Link>
      </div>
    </ScoreProvider>
  );
};

export default ZoomCall5Countdown;
