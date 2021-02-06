import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import ScoreContext from "../../zoomroom/components/ScoreContext";

const CoffeeTimer = ({
  taskNumber,
  numberOfAnswers,
  gameName = "coffeechat",
}) => {
  const [score] = useContext(ScoreContext);
  const [timer, setTimer] = useState(10);
  const history = useHistory();

  useEffect(() => {
    let interval = setInterval(() => {
      if (timer > 0) {
        setTimer((timer) => timer - 1);
      } else {
        clearInterval(interval);
        if (score < numberOfAnswers) {
          // console.log(`tasknum-${taskNumber}`);
          // console.log(`numberOfAnswers-${numberOfAnswers}`);
          // console.log(`updateScore-${score}`);
          return history.push(`/timesup/${gameName}/${taskNumber}`, taskNumber);
        } else {
          return history.push(
            `/readingtheroom/coffeechat/tasks/${taskNumber}/page/3`,
          );
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, history, taskNumber, score, numberOfAnswers, gameName]);

  return <div className="countdown">{timer}</div>;
};

export default CoffeeTimer;
