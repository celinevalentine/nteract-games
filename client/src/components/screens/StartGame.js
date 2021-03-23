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

function StartGame() {
  const { gameId, taskNumber, pageNumber } = useParams();
  const [game, error, isLoading] = useAxios(`/api/v1/games/${gameId}`);

  console.log(game && game.task);
  let tasks = game && game.task;
  let task = tasks && tasks[taskNumber];
  console.log(task);

  return (
    game && (
      <StyledImgWrapper>
        <img src={task && task.img_url} alt="" />
        <PromptBox title={game && game.game_name} msg={task && task.opener} />
        <StyledArrow>
          <Link to="/">
            <LeftArrow />
          </Link>
        </StyledArrow>
        <StyledCtdBtn>
          <Link
            to={`/reading-the-room/games/${game.id}/tasks/${
              parseInt(taskNumber) + 1
            }/page/${parseInt(pageNumber) + 1}`}>
            <Button backgroundColor={`var(--clr-continue)`} name="Continue" />
          </Link>
        </StyledCtdBtn>
      </StyledImgWrapper>
    )
  );
}

export default StartGame;
