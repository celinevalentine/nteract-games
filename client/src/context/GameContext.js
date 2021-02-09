import React, { useState, createContext } from "react";
export const GameContext = createContext();

export const GameContextProvider = (props) => {
  const [gameName, setGameName] = useState(null);
  const addGameName = (newName) => {
    setGameName([...gameName, newName]);
  };
  return (
    <GameContextProvider value={{ gameName, setGameName, addGameName }}>
      {props.children}
    </GameContextProvider>
  );
};
