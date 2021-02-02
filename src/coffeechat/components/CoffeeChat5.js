import React from "react";
import coffeeChat from "../../zoomroom/images/coffeeChatStart.png";
import BackgroundImage from "../../zoomroom/components/BackgroundImage";
import PromptBox from "../../zoomroom/components/PromptBox";

import LeftArrow from "../../zoomroom/components/LeftArrow";
import Button from "../../zoomroom/components/Button";
import { Link } from "react-router-dom";

const CoffeeChat5 = () => {
  return (
    <div>
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
      <BackgroundImage src={coffeeChat} />
      <PromptBox
        proTips="Pro-tip: If you’re familiar with someone you can compliment their outfit."
        task="Tap on the person wearing glasses"
      />
      <Link to={"/readingtheroom/coffeechat/tasks/5/page/2"}>
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default CoffeeChat5;
