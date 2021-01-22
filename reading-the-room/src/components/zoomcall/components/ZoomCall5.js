import React from "react";
import zoomcall from "../images/zoomcall.png";
import PromptBox from "./PromptBox";
import BackgroundImage from "./BackgroundImage";
import LeftArrow from "./LeftArrow";
import Button from "./Button";
import { Link } from "react-router-dom";

const ZoomCall5 = () => {
  return (
    <div>
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>

      <BackgroundImage src={zoomcall} />
      <PromptBox
        proTips="Pro-tip: Zoom calls can sometimes have unexpected surprises."
        task="Click on the puppy"
      />
      <Button
        btnClass="inGameButtonDiv"
        spanId="inGame-btn-name"
        name="Continue"
      />
    </div>
  );
};

export default ZoomCall5;
