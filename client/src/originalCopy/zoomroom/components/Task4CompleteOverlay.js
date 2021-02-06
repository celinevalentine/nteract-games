import React from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { Link } from "react-router-dom";

const Task4CompleteOverlay = () => {
  return (
    <div>
      <PromptBox
        title="You did it!"
        msg="Reminder: Talking about your surroundings can be a good icebreaker."
      />
      <Link to="/readingtheroom/zoomroom/tasks/5/page/1">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default Task4CompleteOverlay;
