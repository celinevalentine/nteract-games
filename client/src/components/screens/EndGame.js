import React from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import { Wrapper, StyledPromptBox, StyledButtons } from "./EndWrapper";

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
    <Wrapper>
      <StyledPromptBox>
        <PromptBox
          title={task && task.closer}
          msg="Congrats! You’ve completed the challenge."
        />
      </StyledPromptBox>
      <StyledButtons>
        <Link to="/">
          <Button backgroundColor={`var(--clr-continue)`} name="Continue" />
        </Link>
        <Link to={`/reading-the-room/games/${game && game.id}/task/0/page/0`}>
          <Button backgroundColor={`var(--clr-play)`} name="play again" />
        </Link>
      </StyledButtons>
    </Wrapper>
  );
};

export default EndGame;
