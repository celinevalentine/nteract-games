import React from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { Link } from "react-router-dom";

const Task2CompleteOverlay = () => {
  return (
    <div>
      <PromptBox
        title="You did it!"
        msg="Reminder: Not smiling does not neccessarily mean the person is bored."
      />
      <Link to="/readingtheroom/zoomroom/tasks/3/page/1">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default Task2CompleteOverlay;
