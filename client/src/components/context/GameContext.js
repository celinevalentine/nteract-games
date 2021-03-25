import React, { useState, useEffect } from "react";
import GameApi from "../apis/GameApi";
import { useAuth0 } from "@auth0/auth0-react";
const GameContext = React.createContext();

const GameProvider = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [games, setGames] = useState([]);
  const [tasks, setTasks] = useState([]);
  const audience = "https://nteractbackend.com";

  useEffect(() => {
    const getGames = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: audience,
        });
        const gameApiUrl = `/api/v1/games`;
        const response = await GameApi.get(gameApiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        let games = response.data;
        console.log(response.data);
        setGames(games);
      } catch (e) {
        console.log(e.message);
      }
    };
    getGames();
  }, []);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: audience,
        });
        const gameApiUrl = `/api/v1/tasks`;
        const response = await GameApi.get(gameApiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        let tasks = response.data;
        console.log(response.data);
        setTasks(tasks);
      } catch (e) {
        console.log(e.message);
      }
    };
    getTasks();
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
