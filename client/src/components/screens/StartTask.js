import React from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

import {
  PromptBox,
  Button,
  StyledArrow,
  StyledImgWrapper,
  StyledCtdBtn,
} from "..";
import LeftArrow from "../LeftArrow";

function StartTask() {
  const { gameId, taskNumber, pageNumber } = useParams();
  console.log(pageNumber);

  const [game, error, isLoading] = useAxios(`/api/v1/games/${gameId}`);

  console.log(game && game.task);
  let tasks = game && game.task;
  let task = tasks && tasks[taskNumber - 1];
  console.log(task);

  return (
    <StyledImgWrapper>
      <img src={task && task.img_url} alt="" />
      <PromptBox proTips={task && task.protips} task={task && task.task_name} />
      <StyledArrow>
        <Link to="/">
          <LeftArrow />
        </Link>
      </StyledArrow>
      <StyledCtdBtn>
        <Link
          to={`/reading-the-room/games/${
            game && game.id
          }/tasks/${taskNumber}/page/${parseInt(pageNumber) + 1}`}>
          <Button backgroundColor={`var(--clr-continue)`} name="Continue" />
        </Link>
      </StyledCtdBtn>
    </StyledImgWrapper>
  );
}

export default StartTask;
