import React from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../context/GameContext";

function Games() {
  const { games } = React.useContext(GameContext);

  return (
    <div className="home">
      <h1 className="text-center">Choose A Senario</h1>
      <ul style={{ listStyleType: "none" }}>
        {games &&
          games.map((game) => (
            <li key={game.id}>
              <Link to={`/reading-the-room/games/${game.id}/tasks/0/page/0`}>
                <img src={game.icon_url} alt={game.game_name} />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Games;
