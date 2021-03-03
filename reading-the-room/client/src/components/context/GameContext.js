import React, { useState, useEffect } from "react";
import GameApi from "../apis/GameApi";

const GameContext = React.createContext();

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [tasks, setTasks] = useState([]);

  const fetchGames = async () => {
    try {
      const resp = await GameApi.get("api/v1/games");
      let games = resp.data;
      setGames(games);
      console.log(games);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTasks = async () => {
    try {
      const resp = await GameApi.get(`api/v1/tasks`);
      let tasks = resp.data;
      setTasks(tasks);
      console.log(tasks);
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

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        tasks,
        setTasks,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
