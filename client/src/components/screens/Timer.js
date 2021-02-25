import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Timer = ({ taskNumber, numberOfAnswers, gameId, score }) => {
  console.log(score);

  const [timer, setTimer] = useState(10);
  const history = useHistory();

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     if (timer > 0) {
  //       setTimer((timer) => timer - 1);
  //     } else {
  //       clearInterval(interval);
  //       if (score < numberOfAnswers) {
  //         return history.push(
  //           `/timesup/games/${gameId}/tasks/${taskNumber}`,
  //           taskNumber,
  //         );
  //       } else {
  //         return history.push(
  //           `/reading-the-room/games/${gameId}/tasks/${taskNumber}/page/3`,
  //         );
  //       }
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [timer, history, taskNumber, score, numberOfAnswers, gameId]);

  return <StyledTimer className="countdown">{timer}</StyledTimer>;
};

export default Timer;

const StyledTimer = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  font-family: var(--ff-secondary);
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 151px;
  text-align: center;

  color: #ffbd59;
  z-index: 2;
`;
