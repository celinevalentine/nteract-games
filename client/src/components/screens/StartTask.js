import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import PromptBox from "./PromptBox";
import LeftArrow from "./LeftArrow";
import GameApi from "../apis/GameApi";
import { StyledArrow } from "./StyledArrow";
import { StyledCtdBtn } from "./StyledCtdBtn";
import { StyledImgWrapper } from "./StyledImgWrapper";

function StartTask() {
  const { gameId, taskNumber, pageNumber } = useParams();
  console.log(pageNumber);

  const [game, setGame] = useState([]);
  const fetchGame = async () => {
    try {
      const resp = await GameApi.get(`/api/v1/games/${gameId}`);
      let game = resp.data;
      setGame(game);
      console.log(game);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchGame();
  }, []);

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
