import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import PromptBox from "./PromptBox";
import LeftArrow from "./LeftArrow";
import { GameContext } from "../context/GameContext";
// import { useFetch } from "./hooks/useFetch";

function StartGame() {
  const { games, tasks } = React.useContext(GameContext);

  console.log(games);
  console.log(tasks);

  const { gameId, taskNumber, pageNumber } = useParams();

  console.log("p", pageNumber);
  console.log("t", taskNumber);
  console.log("g", gameId);

  const task = tasks[taskNumber];
  const game = games[gameId - 1];
  console.log(task);

  const { game_name } = game;
  const { img_url, opener, task_number } = task;
  console.log(task_number);
  return (
    <div>
      <img src={img_url} alt="" />
      <PromptBox title={game_name} msg={opener} />
      <Link to="/">
        <LeftArrow />
      </Link>
      <Link to={`/reading-the-room/games/${game.id}/task/1/page/1`}>
        <Button btnClass="inGameButtonDiv" name="Continue" />
      </Link>
    </div>
  );
}

export default StartGame;
