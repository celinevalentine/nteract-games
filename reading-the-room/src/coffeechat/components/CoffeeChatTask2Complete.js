import React from "react";
import { Link } from "react-router-dom";
import PromptBox from "../../zoomroom/components/PromptBox";
import Button from "../../zoomroom/components/Button";

const CoffeeChatTask2Complete = () => {
  return (
    <div>
      <PromptBox
        title="You did it!"
        msg="Reminder: If you’re going to eat, avoid making a mess."
      />
      <Link to="/readingtheroom/coffeechat/tasks/3/page/1">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default CoffeeChatTask2Complete;
