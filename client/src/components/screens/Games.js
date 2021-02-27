import React from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import styled from "styled-components";

function Games() {
  const { games } = React.useContext(GameContext);

  return (
    <Wrapper>
      <h1>Choose A Scenario</h1>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  h1 {
    text-align: center;
    font-family: var(--ff-secondary);
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    line-height: 75px;
  }
  ul {
    width: 22vw;
    display: flex;
    justify-content: center;

    position: relative;
    margin-top: 5rem;
  }
  li {
    margin-left: 8rem;
    margin-right: 5rem;
  }
`;
export default Games;
