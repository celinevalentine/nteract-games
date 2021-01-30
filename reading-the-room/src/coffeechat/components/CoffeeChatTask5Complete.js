import React from "react";
import { Link } from "react-router-dom";
import PromptBox from "../../zoomroom/components/PromptBox";
import Button from "../../zoomroom/components/Button";

const CoffeeChatTask5Complete = () => {
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
      <Link to="/readingtheroom/coffeechat/tasks">
        <Button
          btnClass="playAgainButtonDiv"
          spanId="play-again-btn-name"
          name="PLAY AGAIN"
        />
      </Link>
    </div>
  );
};

export default CoffeeChatTask5Complete;
