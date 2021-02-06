import React from "react";
import coffeeChat from "../../zoomroom/images/coffeeChatStart.png";
import BackgroundImage from "../../zoomroom/components/BackgroundImage";
import LeftArrow from "../../zoomroom/components/LeftArrow";
import { Link } from "react-router-dom";
import CoffeeTimer from "./CoffeeTimer";
import CoffeeClickScore from "./CoffeeClickScore";
import CoffeeScoreProvider from "./CoffeeScoreProvider";

const CoffeeChat1Countdown = () => {
  return (
    <CoffeeScoreProvider>
      <div>
        <BackgroundImage src={coffeeChat} />
        <CoffeeTimer taskNumber={1} numberOfAnswers={2} />
        <CoffeeClickScore taskNumber={1} numberOfAnswers={2} />
        <Link to="/readingtheroom">
          <LeftArrow />
        </Link>
      </div>
    </CoffeeScoreProvider>
  );
};

export default CoffeeChat1Countdown;
