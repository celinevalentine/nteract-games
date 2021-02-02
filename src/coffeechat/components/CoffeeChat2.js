import React from "react";
import coffeeChat from "../../zoomroom/images/coffeeChatStart.png";
import BackgroundImage from "../../zoomroom/components/BackgroundImage";
import PromptBox from "../../zoomroom/components/PromptBox";

import LeftArrow from "../../zoomroom/components/LeftArrow";
import Button from "../../zoomroom/components/Button";
import { Link } from "react-router-dom";

const CoffeeChat2 = () => {
  return (
    <div>
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
      <BackgroundImage src={coffeeChat} />
      <PromptBox
        proTips="Pro-tip: During professional coffee chats, try to avoid messy food."
        task="Click on the food and drinks"
      />
      <Link to={"/readingtheroom/coffeechat/tasks/2/page/2"}>
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default CoffeeChat2;
