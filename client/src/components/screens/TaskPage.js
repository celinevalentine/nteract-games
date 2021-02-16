import React from "react";
import { useParams } from "react-router-dom";
import EndGame from "./EndGame";
import StartGame from "./StartGame";
import Tasks from "./Tasks";

const TaskPage = () => {
  const { gameId, taskNumber, pageNumber } = useParams();

  switch (pageNumber) {
    case "1":
      return (
        <Tasks
          gameId={gameId}
          taskNumber={taskNumber}
          pageNumber={pageNumber}
        />
      );

    case "2":
      return (
        <StartGame
          gameId={gameId}
          taskNumber={taskNumber}
          pageNumber={pageNumber}
        />
      );

    case "3":
      return (
        <EndGame
          gameId={gameId}
          taskNumber={taskNumber}
          pageNumber={pageNumber}
        />
      );

    default:
      return null;
  }
};

export default TaskPage;
