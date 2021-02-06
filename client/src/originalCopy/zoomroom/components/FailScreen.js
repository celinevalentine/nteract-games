import React, { useState } from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";

const FailScreen = () => {
  const { gameName, taskNumber } = useParams();
  const [prompt, setPrompt] = useState("answers");
  console.log(prompt);

  // const history = useHistory();
  // console.log(history.location.state);
  if (gameName === "zoomchat") {
    if (taskNumber === 1) {
      setPrompt("[mute callers]");
    } else {
      setPrompt("good");
    }
  }

  return (
    <div>
      <PromptBox
        title="Time's Up!"
        msg={`Oh no! You didn’t find all the ${prompt}`}
      />
      <Link to={`/readingtheroom/${gameName}/tasks/${taskNumber}/page/1`}>
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
