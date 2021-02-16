import React, { useState } from "react";
import LeftArrow from "./LeftArrow";
import { GameContext } from "../context/GameContext";
import { Link, useParams } from "react-router-dom";
import Timer from "./Timer";
import ClickScore from "./ClickScore";

const StartGame = () => {
  const { tasks, hotspots } = React.useContext(GameContext);

  const { gameId, taskNumber } = useParams();

  const task = tasks[taskNumber - 1];
  console.log(task);

  const { id, num_answers, task_number, img_url } = task;
  console.log(id);

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
  // const { hotspotName, x, y, width, height } = hotspotObj;

  // const fetchTask = async () => {
  //   try {
  //     const resp = await GameApi.get(`/api/v1/tasks/${id}`);
  //     console.log(resp.data.task);
  //     let task = resp.data.task;
  //     setTask(task);
  //     console.log(task);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchTask();
  // }, []);

  // const hotspotArr = task.hotspot;
  // console.log(hotspotArr);
  // console.log(arr[0]);

  // const { hotspot_name, x, y, width, height } = hotspot;

  return (
    <>
      <img src={img_url} alt="" />
      <Link to="/">
        <LeftArrow />
      </Link>
      {/* <Timer
        taskNumber={task_number}
        numberOfAnswers={num_answers}
        gameId={gameId}
      /> */}
      <ClickScore
        taskNumber={task_number}
        numberOfAnswers={num_answers}
        hotspots={hotspotObj}
      />
    </>
  );
};

export default StartGame;
