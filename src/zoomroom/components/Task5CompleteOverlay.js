import React from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { Link } from "react-router-dom";

const Task5CompleteOverlay = () => {
  return (
    <div>
      <PromptBox
        title="You did it!"
        msg="Congrats! You’ve completed the challenge."
      />
      <Link to="/readingtheroom">
        <Button
          btnClass="mainMenuButtonDiv"
          spanId="main-menu-btn-name"
          name="MAIN MENU"
        />
      </Link>
      <Link to="/readingtheroom/zoomroom/tasks">
        <Button
          btnClass="playAgainButtonDiv"
          spanId="play-again-btn-name"
          name="PLAY AGAIN"
        />
      </Link>
    </div>
  );
};

export default Task5CompleteOverlay;
