import React, { useState, useEffect } from "react";
import { PromptBox, Button } from "..";
import GameApi from "../apis/GameApi";
import { Link, useParams } from "react-router-dom";
import EndGame from "./EndGame";
import styled from "styled-components";

const EndTask = () => {
  const { gameId, taskNumber, pageNumber } = useParams();

  console.log(gameId, taskNumber, pageNumber);

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
  console.log(taskNumber);
  let task = tasks && tasks[taskNumber - 1];
  console.log(task);

  return (
    <StyledPromptBoxDiv>
      {taskNumber === "5" && pageNumber === "3" ? (
        <EndGame
          gameId={gameId}
          taskNumber={taskNumber}
          pageNumber={pageNumber}
        />
      ) : (
        <>
          <StyledPromptBox>
            <PromptBox
              title={task && task.closer}
              msg={task && task.reminder}
            />
          </StyledPromptBox>
          <StyledBtn>
            <Link
              to={`/reading-the-room/games/${game && game.id}/tasks/${
                parseInt(taskNumber) + 1
              }/page/1`}>
              <Button backgroundColor={`var(--clr-continue)`} name="Continue" />
            </Link>
          </StyledBtn>
        </>
      )}
    </StyledPromptBoxDiv>
  );
};

export default EndTask;
const StyledPromptBoxDiv = styled.div`
  z-index: 5;
  display: block;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  word-wrap: word-break;
`;

const StyledPromptBox = styled.div`
  z-index: 5;
  width: 92%;
  height: 100%;
  position: absolute;
  left: 48%;
  top: 50%;
  transform: translate(-50%, -50%);
  h3 {
    font-family: var(--ff-ternary);
    font-size: 36px;
    font-weight: bold;
    line-height: 57px;
    text-align: center;
    z-index: 9;
    position: absolute;
    left: 50%;
    top: 8%;
    transform: translate(-50%, -50%);
  }
  small {
    font-family: var(--ff-primary);
    font-size: 21px;
    line-height: 28px;
    text-align: center;
    z-index: 9;
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translate(-50%, -50%);
    word-wrap: break-word;
    padding-left: 1rem;
  }

  img {
    width: 70%;
    min-height: 100px;
    left: 50%;
    top: 15%;
    transform: translate(-50%, -50%);
    position: absolute;
    margin-top: 1rem;
  }
`;
const StyledBtn = styled(Link)`
  z-index: 9;
  position: absolute;
  left: 50%;
  top: 28%;
  transform: translate(-50%, -50%);
`;
