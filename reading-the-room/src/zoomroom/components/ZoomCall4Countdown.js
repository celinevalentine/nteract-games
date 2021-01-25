import React from "react";
import zoomcall from "../images/zoomcall.png";
import ClickScore from "./ClickScore";
import BackgroundImage from "./BackgroundImage";
import Timer from "./Timer";
import LeftArrow from "./LeftArrow";
import { Link } from "react-router-dom";

const ZoomCall4Countdown = () => {
  return (
    <div>
      <BackgroundImage src={zoomcall} />
      <Timer taskNumber={4} />
      <ClickScore taskNumber={4} numberOfAnswers={3} />
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
    </div>
  );
};

export default ZoomCall4Countdown;
