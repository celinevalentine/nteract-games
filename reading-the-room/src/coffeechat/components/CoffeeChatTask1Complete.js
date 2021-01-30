import React from "react";
import { Link } from "react-router-dom";
import PromptBox from "../../zoomroom/components/PromptBox";
import Button from "../../zoomroom/components/Button";

const CoffeeChatTask1Complete = () => {
  return (
    <div>
      <PromptBox
        title="You did it!"
        msg="Reminder: Active listening helps you to ask questions and continue the conversation!"
      />
      <Link to="/readingtheroom/coffeechat/tasks/2/page/1">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default CoffeeChatTask1Complete;
