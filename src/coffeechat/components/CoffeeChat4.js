import React from "react";
import coffeeChat from "../../zoomroom/images/coffeeChatStart.png";
import BackgroundImage from "../../zoomroom/components/BackgroundImage";
import PromptBox from "../../zoomroom/components/PromptBox";

import LeftArrow from "../../zoomroom/components/LeftArrow";
import Button from "../../zoomroom/components/Button";
import { Link } from "react-router-dom";

const CoffeeChat4 = () => {
  return (
    <div>
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
      <BackgroundImage src={coffeeChat} />
      <PromptBox
        proTips="Pro-tip: Try to find a quiet table away from any distractions."
        task="Click on all the tables"
      />
      <Link to={"/readingtheroom/coffeechat/tasks/4/page/2"}>
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default CoffeeChat4;
