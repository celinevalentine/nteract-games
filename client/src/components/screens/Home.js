import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import readingRoom from "../../images/readingroom.png";
import styled from "styled-components";

function Home() {
  return (
    <>
      <nav>
        <Navbar />
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
