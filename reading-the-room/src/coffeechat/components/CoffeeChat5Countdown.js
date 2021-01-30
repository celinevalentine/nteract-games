import React from "react";
import coffeeChat from "../../zoomroom/images/coffeeChatStart.png";
import BackgroundImage from "../../zoomroom/components/BackgroundImage";
import LeftArrow from "../../zoomroom/components/LeftArrow";
import { Link } from "react-router-dom";
// import ClickScore from "../../zoomroom/components/ClickScore";
import ScoreProvider from "../../zoomroom/components/ScoreProvider";
import CoffeeTimer from "./CoffeeTimer";
import CoffeeClickScore from "./CoffeeClickScore";

const CoffeeChat5Countdown = () => {
  return (
    <ScoreProvider>
      <div>
        <BackgroundImage src={coffeeChat} />
        <CoffeeTimer taskNumber={5} numberOfAnswers={1} />
        <CoffeeClickScore taskNumber={5} numberOfAnswers={1} />
        <Link to="/readingtheroom">
          <LeftArrow />
        </Link>
      </div>
    </ScoreProvider>
  );
};

export default CoffeeChat5Countdown;
