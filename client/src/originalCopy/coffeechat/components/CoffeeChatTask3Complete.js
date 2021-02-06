import React from "react";
import { Link } from "react-router-dom";
import PromptBox from "../../zoomroom/components/PromptBox";
import Button from "../../zoomroom/components/Button";

const CoffeeChatTask3Complete = () => {
  return (
    <div>
      <PromptBox
        title="You did it!"
        msg="Reminder: Hand gestures can make a conversation more animated."
      />
      <Link to="/readingtheroom/coffeechat/tasks/4/page/1">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default CoffeeChatTask3Complete;
