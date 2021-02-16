import React, { useState, useEffect } from "react";
import GameApi from "../apis/GameApi";

const GameContext = React.createContext();

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [hotspots, setHotspots] = useState([]);

  const [score, setScore] = useState(0);

  const fetchGames = async () => {
    try {
      const resp = await GameApi.get("/api/v1/games");
      console.log(resp.data.games);
      let games = resp.data.games;
      setGames(games);
      console.log(games);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTasks = async () => {
    try {
      const resp = await GameApi.get(`/api/v1/tasks`);
      // console.log(resp.data.tasks);
      let tasks = resp.data.tasks;
      setTasks(tasks);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchHotspots = async () => {
    try {
      const resp = await GameApi.get(`/api/v1/hotspots`);
      // console.log(resp.data.hotspots);
      let hotspots = resp.data.hotspots;
      setHotspots(hotspots);
      console.log(hotspots);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    fetchHotspots();
  }, []);

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        tasks,
        setTasks,
        score,
        setScore,
        hotspots,
        setHotspots,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
