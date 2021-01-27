import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import ScoreContext from "./ScoreContext";

const Timer = ({ taskNumber, clickscore, numberOfAnswers }) => {
  // const { score, taskNumber, numberOfAnswers } = useContext(ScoreContext);

  const [timer, setTimer] = useState(10);
  const history = useHistory();

  useEffect(() => {
    let interval = setInterval(() => {
      if (timer > 0) {
        setTimer((timer) => timer - 1);
      } else {
        clearInterval(interval);
        if (clickscore < numberOfAnswers) {
          return history.push("/timesup");
        } else {
          return history.push(
            `/readingtheroom/zoomroom/tasks/${taskNumber}/page/3`,
          );
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, history, taskNumber, clickscore, numberOfAnswers]);

  return <div className="countdown">{timer}</div>;
};

export default Timer;
