import React from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { GameContext } from "../context/GameContext";
import { Link, useParams } from "react-router-dom";

const EndGame = () => {
  const { games, tasks } = React.useContext(GameContext);

  const { gameId, taskNumber } = useParams();
  const game = games[gameId - 1];
  const task = tasks[taskNumber - 1];
  console.log(task);

  const { closer, reminder } = task;

  return (
    <div>
      <PromptBox title={closer} msg={reminder} />
      <Link
        to={`/reading-the-room/games/${game.id}/task/${
          parseInt(taskNumber) + 1
        }/page/1
        }`}>
        <Button
          btnClass="inGameButtonDiv"
          spanId="inGame-btn-name"
          name="Continue"
        />
      </Link>
    </div>
  );
};

export default EndGame;
