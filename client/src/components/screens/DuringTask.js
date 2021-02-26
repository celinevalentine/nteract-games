import React, { useState, useEffect } from "react";
import LeftArrow from "./LeftArrow";
import { useParams } from "react-router-dom";
import Timer from "./Timer";
import ClickScore from "./ClickScore";
import GameApi from "../apis/GameApi";
import { StyledArrow } from "./StyledArrow";
import { StyledImgWrapper } from "./StyledImgWrapper";

const DuringTask = () => {
  const [task, setTask] = useState([]);
  const [score, setScore] = useState(0);
  const [game, setGame] = useState([]);
  const { gameId, taskNumber } = useParams();
  console.log("taskNumber", taskNumber);
  console.log("gid", gameId);

  const fetchData = () => {
    GameApi.get(`/api/v1/games/${gameId}`)
      .then((resp) => {
        let game = resp.data;
        setGame(game);
        console.log("tasks", game && game.task);
        let tasks = game && game.task;
        let taskObj = tasks && tasks[taskNumber - 1];
        console.log("tid", taskObj && taskObj.id);
        return GameApi.get(`/api/v1/tasks/${taskObj && taskObj.id}`);
      })
      .then((resp) => {
        let task = resp.data;
        setTask(task);
        console.log(task);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
