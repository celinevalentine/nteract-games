import React from "react";
import zoomcall from "../images/zoomcall.png";
import PromptBox from "./PromptBox";
import BackgroundImage from "./BackgroundImage";
import LeftArrow from "./LeftArrow";
import Button from "./Button";
import { Link } from "react-router-dom";

const ZoomCall2 = () => {
  return (
    <div>
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>

      <BackgroundImage src={zoomcall} />
      <PromptBox
        proTips="Pro-tip: Not smiling could sometimes mean the person is listening intently."
        task="Tap on the non-smiling people"
      />
      <Link to="/readingtheroom/zoomroom/tasks/2/page/2">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default ZoomCall2;
