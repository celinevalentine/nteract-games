import React from "react";
import coffeeChat from "../../zoomroom/images/coffeeChatStart.png";
import BackgroundImage from "../../zoomroom/components/BackgroundImage";
import PromptBox from "../../zoomroom/components/PromptBox";

import LeftArrow from "../../zoomroom/components/LeftArrow";
import Button from "../../zoomroom/components/Button";
import { Link } from "react-router-dom";

const CoffeeChat1 = () => {
  return (
    <div>
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
      <BackgroundImage src={coffeeChat} />
      <PromptBox
        proTips="Pro-tip: Active listeners face the speaker, nod or hold eye contact, and rest their hands to the side."
        task="Tap on the listeners"
      />
      <Link to={"/readingtheroom/coffeechat/tasks/1/page/2"}>
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default CoffeeChat1;
