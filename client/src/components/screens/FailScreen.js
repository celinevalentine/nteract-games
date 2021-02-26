import React, { useContext } from "react";
import PromptBox from "./PromptBox";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import { Wrapper, StyledPromptBox, StyledButtons } from "./EndWrapper";

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
    <Wrapper>
      <StyledPromptBox>
        <PromptBox
          title="Time's Up!"
          msg="Oh no! You didn’t find all the answers"
        />
      </StyledPromptBox>
      <StyledButtons>
        <Link to={`/reading-the-room/games/${id}/tasks/${task_number}/page/1`}>
          <Button backgroundColor={`var(--clr-try)`} name="try again" />
        </Link>
        <Link to="/">
          <Button backgroundColor={`var(--clr-main)`} name="main menu" />
        </Link>
      </StyledButtons>
    </Wrapper>
  );
};

export default FailScreen;
