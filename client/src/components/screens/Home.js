import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";

function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <h1>Choose A Game</h1>
      <Link to="/reading-the-room/intro">Reading the Room</Link>
    </>
  );
}

export default Home;
