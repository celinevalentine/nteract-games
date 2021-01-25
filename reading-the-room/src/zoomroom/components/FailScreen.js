import React from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { Link } from "react-router-dom";

const FailScreen = ({ taskNumber, prompt }) => {
  return (
    <div>
      <PromptBox
        title="Time's Up!"
        msg={`Oh no! You didn’t find all the ${prompt}`}
      />
      <Link to={`/readingtheroom/zoomroom/tasks/${taskNumber}/page/1`}>
        <Button
          btnClass="tryAgainButtonDiv"
          spanId="play-again-btn-name"
          name="TRY AGAIN"
        />
      </Link>
      <Link to="/readingtheroom">
        <Button
          btnClass="mainMenuButtonDiv"
          spanId="main-menu-btn-name"
          name="MAIN MENU"
        />
      </Link>
    </div>
  );
};

export default FailScreen;
