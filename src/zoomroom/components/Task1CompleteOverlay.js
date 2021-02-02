import React from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { Link } from "react-router-dom";

const Task1CompleteOverlay = () => {
  return (
    <div>
      <PromptBox title="You did it!" msg="Reminder: Mute your mic!" />
      <Link to="/readingtheroom/zoomroom/tasks/2/page/1">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default Task1CompleteOverlay;
