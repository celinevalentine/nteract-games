import React from "react";
import coffeeChat from "../../zoomroom/images/coffeeChatStart.png";
import Button from "../../zoomroom/components/Button";
import LeftArrow from "../../zoomroom/components/LeftArrow";
import { Link } from "react-router-dom";
import PromptBox from "../../zoomroom/components/PromptBox";
import BackgroundImage from "../../zoomroom/components/BackgroundImage";
// import { useParams } from "react-router-dom";
// import LeftArrow from './LeftArrow';
// import CoffeeChatStart from './CoffeeChatStart';
// const { gameName } = useParams();

const CoffeeChatStart = () => {
  return (
    <div>
      <BackgroundImage src={coffeeChat} />
      <PromptBox title="Coffee Chat" msg="Complete all 5 tasks" />
      <Link to="/readingtheroom">
        <LeftArrow />
      </Link>
      <Link to="/readingtheroom/coffeechat/tasks/1/page/1">
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default CoffeeChatStart;
