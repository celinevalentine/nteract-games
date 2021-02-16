import React from "react";
import { useParams } from "react-router-dom";
import EndTask from "./EndTask";
import DuringTask from "./DuringTask";
import StartTask from "./StartTask";
import StartGame from "./StartGame";

const TaskPage = () => {
  const { gameId, taskNumber, pageNumber } = useParams();

  switch (pageNumber) {
    case "0":
      return (
        <StartGame
          gameId={gameId}
          taskNumber={taskNumber}
          pageNumber={pageNumber}
        />
      );
    case "1":
      return (
        <StartTask
          gameId={gameId}
          taskNumber={taskNumber}
          pageNumber={pageNumber}
        />
      );

    case "2":
      return (
        <DuringTask
          gameId={gameId}
          taskNumber={taskNumber}
          pageNumber={pageNumber}
        />
      );

    case "3":
      return (
        <EndTask
          gameId={gameId}
          taskNumber={taskNumber}
          pageNumber={pageNumber}
        />
      );
    //end of game when taskNumber=5, render EndGame

    default:
      return null;
  }
};

export default TaskPage;
