import React from "react";
import zoomcall from "../images/zoomcall.png";
import PromptBox from "./PromptBox";
import BackgroundImage from "./BackgroundImage";
import LeftArrow from "./LeftArrow";
import Button from "./Button";
import { Link } from "react-router-dom";

const ZoomCall1 = () => {
  return (
    <div>
      <Link to="/readingtheroom/zoomroom/page/1">
        <LeftArrow />
      </Link>

      <BackgroundImage src={zoomcall} />
      <PromptBox
        proTips="Pro-tip: Muting your microphone helps others focus on the speaker."
        task="Tap on the muted callers"
      />
      <Link to="/readingtheroom/zoomroom/tasks/1/page/2">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default ZoomCall1;
