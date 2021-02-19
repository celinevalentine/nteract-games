import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import readingRoom from "../../images/readingroom.png";

function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      {/* <h1 className="text-center text-primary ">Choose A Game</h1> */}
      <Link to="/reading-the-room/intro">
        <img
          className="col d-flex align-items-center justify-content-center"
          src={readingRoom}
          alt=""
        />
      </Link>
    </>
  );
}

export default Home;
