import React, { useContext } from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import { GameContext } from "../context/GameContext";

const FailScreen = () => {
  const { gameId, taskNumber } = useParams();
  const { tasks, games } = useContext(GameContext);
  const task = tasks[taskNumber - 1];
  const game = games[gameId - 1];
  const { id } = game;

  const { task_number } = task;

  // const history = useHistory();
  // console.log(history.location.state);

  return (
    <div>
      <PromptBox
        title="Time's Up!"
        msg="Oh no! You didn’t find all the answers"
      />
      <Link to={`/reading-the-room/games/${id}/tasks/${task_number}/page/1`}>
        <Button
          btnClass="tryAgainButtonDiv"
          spanId="play-again-btn-name"
          name="TRY AGAIN"
        />
      </Link>
      <Link to="/">
        <Button
          btnClass="mainMenuButtonDiv"
          spanId="main-menu-btn-name"
          name="MAIN MENU"
        />
      </Link>
    </div>
  );
};

export default FailScreen;
