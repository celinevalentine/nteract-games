import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import PromptBox from "./PromptBox";
import LeftArrow from "./LeftArrow";
import GameApi from "../apis/GameApi";

function StartGame() {
  const { gameId, taskNumber, pageNumber } = useParams();

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
  let task = tasks && tasks[taskNumber];
  console.log(task);

  // console.log(task.task_number);

  return (
    <div>
      <img src={task && task.img_url} alt="" />
      <PromptBox title={game && game.game_name} msg={task && task.opener} />
      <Link to="/">
        <LeftArrow />
      </Link>
      <Link
        to={`/reading-the-room/games/${game.id}/tasks/${
          parseInt(taskNumber) + 1
        }/page/${parseInt(pageNumber) + 1}`}>
        <Button btnClass="inGameButtonDiv" name="Continue" />
      </Link>
    </div>
  );
}

export default StartGame;
