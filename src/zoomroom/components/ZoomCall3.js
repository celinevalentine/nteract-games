import React from "react";
import zoomcall from "../images/zoomcall.png";
import PromptBox from "./PromptBox";
import BackgroundImage from "./BackgroundImage";
import LeftArrow from "./LeftArrow";
import Button from "./Button";
import { Link } from "react-router-dom";

const ZoomCall3 = () => {
  return (
    <div>
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>

      <BackgroundImage src={zoomcall} />
      <PromptBox
        proTips="Pro-tip: Couples on calls usually have one person who’s chattier than the other. Try to engage both in the conversation!"
        task="Click on the couples"
      />
      <Link to="/readingtheroom/zoomroom/tasks/3/page/2">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default ZoomCall3;
