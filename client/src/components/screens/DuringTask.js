import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { StyledImgWrapper, Timer, ClickScore } from "..";

const DuringTask = () => {
  const [score, setScore] = useState(0);
  const { gameId, taskNumber } = useParams();
  const [game, error, isLoading] = useAxios(`/api/v1/games/${gameId}`);

  console.log("taskNumber", taskNumber);
  console.log("gid", gameId);
  let tasks = game && game.task;
  let taskObj = tasks && tasks[taskNumber - 1];
  console.log("tid", taskObj && taskObj.id);

  const [task] = useAxios(`/api/v1/tasks/${taskObj && taskObj.id}`);

  console.log("task", task);

  const hotspots = task && task.hotspot;
  console.log("hotspots", hotspots);
  const hotspotName = hotspots && hotspots.map((h) => h.hotspot_name);
  console.log("hotspot", hotspotName);

  return (
    <StyledImgWrapper>
      <img src={task && task.img_url} alt="" />
      <Timer
        taskNumber={task && task.task_number}
        numberOfAnswers={task && task.num_answers}
        gameId={game.id}
        score={score}
      />
      <ClickScore
        taskNumber={task && task.task_number}
        numberOfAnswers={task && task.num_answers}
        hotspots={hotspots}
        hotspotName={hotspotName}
        score={score}
        setScore={setScore}
      />
    </StyledImgWrapper>
  );
};

export default DuringTask;
