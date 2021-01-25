import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import ScoreContext from "./ScoreContext";

const Timer = ({ taskNumber }) => {
  // const { score, taskNumber, numberOfAnswers } = useContext(ScoreContext);

  const [timer, setTimer] = useState(10);
  const history = useHistory();

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     if (timer > 0) {
  //       setTimer((timer) => timer - 1);
  //     } else {
  //       clearInterval(interval);
  //       // if (score < numberOfAnswers) {
  //       //   history.push("/timesup");
  //       // }
  //       history.push(`/readingroom/zoomroom/tasks/${taskNumber}/page/3`);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [timer, history, taskNumber]);

  return <div className="countdown">{timer}</div>;
};

export default Timer;
