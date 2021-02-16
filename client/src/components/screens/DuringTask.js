import React, { useState } from "react";
import LeftArrow from "./LeftArrow";
import { GameContext } from "../context/GameContext";
import { Link, useParams } from "react-router-dom";
import Timer from "./Timer";
import ClickScore from "./ClickScore";

const DuringTask = () => {
  const { games, tasks, hotspots } = React.useContext(GameContext);

  const { gameId, taskNumber } = useParams();
  console.log("taskNum", taskNumber);

  const task = tasks[taskNumber - 1];
  console.log(task);
  const game = games[gameId - 1];
  console.log("gameId", game.id);

  const { id, num_answers, task_number, img_url } = task;
  console.log("answers", num_answers);
  console.log("tasknum", task_number, taskNumber);

  const hotspotsByTaskId = hotspots.filter((h) => h.task_id === id);
  console.log(hotspotsByTaskId);
  const hotspotNames = hotspotsByTaskId.map((h) => h);
  console.log(hotspotNames);
  const hotspotObj = hotspotsByTaskId.map((h) => ({
    hotspotName: h.hotspot_name,
    x: h.x,
    y: h.y,
    width: h.width,
    height: h.height,
  }));
  console.log(hotspotObj);

  return (
    <>
      <img src={img_url} alt="" />
      <Link to="/">
        <LeftArrow />
      </Link>
      {/* <Timer
        taskNumber={task_number}
        numberOfAnswers={num_answers}
        gameId={game.id}
      /> */}
      <ClickScore
        taskNumber={task_number}
        numberOfAnswers={num_answers}
        hotspots={hotspotObj}
      />
    </>
  );
};

export default DuringTask;
