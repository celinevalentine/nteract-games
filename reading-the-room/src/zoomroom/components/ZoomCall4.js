import React from "react";
import zoomcall from "../images/zoomcall.png";
import PromptBox from "./PromptBox";
import BackgroundImage from "./BackgroundImage";
import LeftArrow from "./LeftArrow";
import Button from "./Button";
import { Link } from "react-router-dom";

const ZoomCall4 = () => {
  return (
    <div>
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>

      <BackgroundImage src={zoomcall} />
      <PromptBox
        proTips="Pro-tip: Complimenting someone’s background can be a good conversation starter.."
        task="Click on the books"
      />
      <Link to="/readingtheroom/zoomroom/tasks/4/page/2">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default ZoomCall4;
