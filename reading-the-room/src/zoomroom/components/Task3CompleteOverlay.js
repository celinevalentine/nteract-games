import React from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { Link } from "react-router-dom";

const Task3CompleteOverlay = () => {
  return (
    <div>
      <PromptBox
        title="You did it!"
        msg="Reminder: Try to engage both members in a couple in conversation."
      />
      <Link to="/readingtheroom/zoomroom/tasks/4/page/1">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default Task3CompleteOverlay;
