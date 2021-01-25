import React from "react";
import zoomcall from "../images/zoomcall.png";
import ClickScore from "./ClickScore";
import BackgroundImage from "./BackgroundImage";
import Timer from "./Timer";
import LeftArrow from "./LeftArrow";
import { Link } from "react-router-dom";
// import FailScreen from "./FailScreen";

const ZoomCall3Countdown = () => {
  return (
    <div>
      <BackgroundImage src={zoomcall} />
      <Timer taskNumber={3} />
      <ClickScore taskNumber={3} numberOfAnswers={2} />
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
    </div>
  );
};

export default ZoomCall3Countdown;
