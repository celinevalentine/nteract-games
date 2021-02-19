import React, { useState, useEffect } from "react";
import GameApi from "../apis/GameApi";

const GameContext = React.createContext();

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [hotspots, setHotspots] = useState([]);

  const fetchGames = async () => {
    try {
      const resp = await GameApi.get("/api/v1/games");
      let games = resp.data;
      setGames(games);
      console.log(games);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTasks = async () => {
    try {
      const resp = await GameApi.get(`/api/v1/tasks`);
      let tasks = resp.data;
      setTasks(tasks);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  // const fetchHotspots = async () => {
  //   try {
  //     const resp = await GameApi.get(`/api/v1/hotspots`);
  //     let hotspots = resp.data;
  //     setHotspots(hotspots);
  //     console.log(hotspots);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    fetchTasks();
  }, []);

  // useEffect(() => {
  //   fetchHotspots();
  // }, []);

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        tasks,
        setTasks,
        // hotspots,
        // setHotspots,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
