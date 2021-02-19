import React, { useState, useEffect } from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import GameApi from "../apis/GameApi";
import { Link, useParams } from "react-router-dom";
import EndGame from "./EndGame";

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
    <div>
      {taskNumber === "5" && pageNumber === "3" ? (
        <EndGame
          gameId={gameId}
          taskNumber={taskNumber}
          pageNumber={pageNumber}
        />
      ) : (
        <>
          <PromptBox title={task && task.closer} msg={task && task.reminder} />
          <Link
            to={`/reading-the-room/games/${game && game.id}/tasks/${
              parseInt(taskNumber) + 1
            }/page/1`}>
            <Button
              btnClass="inGameButtonDiv"
              spanId="inGame-btn-name"
              name="Continue"
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default EndTask;
