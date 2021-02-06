import React from "react";
import zoomcall from "../images/zoomcall.png";
import PromptBox from "./PromptBox";
import BackgroundImage from "./BackgroundImage";
import Button from "./Button";
import LeftArrow from "./LeftArrow";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import LeftArrow from './LeftArrow';
// const { gameName } = useParams();

const ZoomCallStart = () => {
  return (
    <div>
      <BackgroundImage src={zoomcall} />
      <PromptBox title="Zoom Call" msg="Complete all 5 tasks" />
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
      <Link to="/readingtheroom/zoomroom/tasks/1/page/1">
        <Button
          btnClass="inGameButtonDiv"
          // spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default ZoomCallStart;
