import React from "react";
import zoomcall from "../images/zoomcall.png";
import BackgroundImage from "./BackgroundImage";
import Timer from "./Timer";
import LeftArrow from "./LeftArrow";
import { Link } from "react-router-dom";
// import Mapper from "./Mapper";

const ZoomCall1Countdown = () => {
  return (
    <div>
      <BackgroundImage src={zoomcall} usemap="zoomcall" />
      <Timer taskNumber={1} answers={3} />
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
      {/* <Mapper
        src={zoomcall}
        name="zoomcall"
        title="11"
        coords="0,22,295,196"
        shape="rect"
        style={{ backgroundColor: "red", border: "5px,solid,red" }}
      /> */}
    </div>
  );
};

export default ZoomCall1Countdown;
