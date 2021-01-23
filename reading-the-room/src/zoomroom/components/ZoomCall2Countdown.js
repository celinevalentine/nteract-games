import React from "react";
import zoomcall from "../images/zoomcall.png";

import BackgroundImage from "./BackgroundImage";
import Timer from "./Timer";
import LeftArrow from "./LeftArrow";
import { Link } from "react-router-dom";

const ZoomCall2Countdown = () => {
  return (
    <div>
      <BackgroundImage src={zoomcall} />
      <Timer taskNumber={2} answers={3} />
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
    </div>
  );
};

export default ZoomCall2Countdown;
