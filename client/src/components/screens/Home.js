import React from "react";
import { Link } from "react-router-dom";

import readingRoom from "../../images/readingroom.png";
import styled from "styled-components";
import { NavBar } from "..";

function Home() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Wrapper>
        <Link to="/reading-the-room/intro">
          <img src={readingRoom} alt="" />
        </Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export default Home;
