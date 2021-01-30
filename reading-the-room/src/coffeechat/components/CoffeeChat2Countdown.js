import React from "react";
import coffeeChat from "../../zoomroom/images/coffeeChatStart.png";
import BackgroundImage from "../../zoomroom/components/BackgroundImage";
import LeftArrow from "../../zoomroom/components/LeftArrow";
import { Link } from "react-router-dom";
import CoffeeScoreProvider from "./CoffeeScoreProvider";
import CoffeeTimer from "./CoffeeTimer";
import CoffeeClickScore from "./CoffeeClickScore";

const CoffeeChat2Countdown = () => {
  return (
    <CoffeeScoreProvider>
      <div>
        <BackgroundImage src={coffeeChat} />
        <CoffeeTimer taskNumber={2} numberOfAnswers={4} />
        <CoffeeClickScore taskNumber={2} numberOfAnswers={4} />
        <Link to="/readingtheroom">
          <LeftArrow />
        </Link>
      </div>
    </CoffeeScoreProvider>
  );
};

export default CoffeeChat2Countdown;
