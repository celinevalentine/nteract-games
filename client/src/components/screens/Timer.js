import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GameContext } from "../context/GameContext";

const Timer = ({ taskNumber, numberOfAnswers, gameId }) => {
  const { score } = React.useContext(GameContext);
  // console.log(games);
  // console.log(tasks);
  console.log(score);

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
          return history.push(`/timesup/${gameId}/${taskNumber}`, taskNumber);
        } else {
          return history.push(
            `/reading-the-room/games/${gameId}/tasks/${taskNumber}/page/3`,
          );
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, history, taskNumber, score, numberOfAnswers, gameId]);

  return <div className="countdown">{timer}</div>;
};

export default Timer;
