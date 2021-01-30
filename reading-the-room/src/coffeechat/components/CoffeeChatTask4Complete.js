import React from "react";
import { Link } from "react-router-dom";
import PromptBox from "../../zoomroom/components/PromptBox";
import Button from "../../zoomroom/components/Button";

const CoffeeChatTask4Complete = () => {
  return (
    <div>
      <PromptBox
        title="You did it!"
        msg="Reminder: Find ways to eliminate distractions in a busy area."
      />
      <Link to="/readingtheroom/coffeechat/tasks/5/page/1">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default CoffeeChatTask4Complete;
