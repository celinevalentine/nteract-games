import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import PromptBox from "./PromptBox";
import LeftArrow from "./LeftArrow";
import { GameContext } from "../context/GameContext";
// import { useFetch } from "./hooks/useFetch";

function StartTask() {
  const { games, tasks } = React.useContext(GameContext);

  // console.log(games);
  // console.log(tasks);

  const [page, setPage] = useState(1);
  // console.log("p", page);

  const { gameId, taskNumber, pageNumber } = useParams();

  console.log("p", pageNumber);
  console.log("t", taskNumber);
  console.log("g", gameId);

  const task = tasks[taskNumber - 1];
  const game = games[gameId - 1];
  console.log(task);

  const { img_url, protips, task_name, task_number } = task;
  console.log(task_number);
  return (
    <div>
      <img src={img_url} alt="" />
      <PromptBox proTips={protips} task={task_name} />
      <Link to="/">
        <LeftArrow />
      </Link>
      <Link to={`/reading-the-room/games/${game.id}/task/${taskNumber}/page/2`}>
        <Button btnClass="inGameButtonDiv" name="Continue" />
      </Link>
    </div>
  );
}

export default StartTask;
