import React from "react";
import zoomcall from "../images/zoomcall.png";

import BackgroundImage from "./BackgroundImage";
import Timer from "./Timer";
import LeftArrow from "./LeftArrow";
import { Link } from "react-router-dom";
import CorrectClicks from "./CorrectClicks";

const ZoomCall4Countdown = () => {
  return (
    <div>
      <BackgroundImage src={zoomcall} />
      <Timer />
      <CorrectClicks />
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
    </div>
  );
};

export default ZoomCall4Countdown;
