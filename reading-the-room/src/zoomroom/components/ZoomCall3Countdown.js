import React from "react";
import zoomcall from "../images/zoomcall.png";

import BackgroundImage from "./BackgroundImage";
import Timer from "./Timer";
import LeftArrow from "./LeftArrow";
import { Link } from "react-router-dom";

const ZoomCall3Countdown = () => {
  return (
    <div>
      <BackgroundImage src={zoomcall} />
      <Timer taskNumber={3} answers={2} />
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
    </div>
  );
};

export default ZoomCall3Countdown;
