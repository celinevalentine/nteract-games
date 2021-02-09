import React, { useState, useEffect } from "react";
import GameApi from "../apis/GameApi";
// import axios from "axios";

const Game = () => {
  const [gameName, setGameName] = useState(null);
  const [url, setUrl] = useState(null);
  const imgURL = `https://drive.google.com/file/d/${url}/view?usp=sharing`;
  const [taskName, setTaskName] = useState(null);
  const [hotspot, setHotspot] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gameNameRes = await GameApi.get("/api/v1/games");
        setGameName(gameNameRes.data[0].game_name);
        const imgRes = await GameApi.get("/api/v1/images");
        setUrl(imgRes.data[0].img_url);
        const taskRes = await GameApi.get("/api/v1/tasks");
        setTaskName(taskRes.data[0].task_name);
        const hotspotRes = await GameApi.get("/api/v1/hotspots");
        setHotspot(hotspotRes.data[0].hotspot_name);
        console.log(url);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      <h1>{gameName}</h1>
      {/* todo: remove CORB error */}
      <img src={imgURL} alt="" />
      <h3>{taskName}</h3>
      <h4>{hotspot}</h4>
    </>
  );
};

export default Game;
