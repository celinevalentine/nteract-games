import React from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import { GameContext } from "../context/GameContext";

const EndGame = () => {
  const { games, tasks } = React.useContext(GameContext);
  const { gameId, taskNumber, pageNumber } = useParams();

  console.log("p", pageNumber);
  console.log("t", taskNumber);
  console.log("g", gameId);

  const task = tasks[taskNumber - 1];
  const game = games[gameId - 1];
  console.log(task && task.closer);
  return (
    <div>
      <PromptBox
        title={task && task.closer}
        msg="Congrats! You’ve completed the challenge."
      />
      <Link to="/">
        <Button
          btnClass="mainMenuButtonDiv"
          spanId="main-menu-btn-name"
          name="MAIN MENU"
        />
      </Link>
      <Link to={`/reading-the-room/games/${game && game.id}/task/0/page/0`}>
        <Button
          btnClass="playAgainButtonDiv"
          spanId="play-again-btn-name"
          name="PLAY AGAIN"
        />
      </Link>
    </div>
  );
};

export default EndGame;
