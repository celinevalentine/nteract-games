import React from "react";
import chair from "../images/chair.png";
import ellipse from "../images/ellipse.svg";
import ellipseLight from "../images/ellipseLight.svg";
import { Link } from "react-router-dom";

const ReadingtheRoomScreen2 = () => {
  return (
    <div>
      <h1 className="gameIntroTitle">Reading The Room</h1>
      <img id="chair2" src={chair} alt="chair" />
      <p className="gameIntroWords">
        {" "}
        In this game, your goal is to complete 5 different tasks before the
        timer runs out.
      </p>
      <div className="ellipses">
        <Link to="/readingtheroom/screen/1">
          <img id="ellipse" src={ellipse} alt="elipse" />
        </Link>
        <Link to="/readingtheroom/screen/2">
          <img id="ellipseLight" src={ellipseLight} alt="elipse light" />
        </Link>
      </div>
    </div>
  );
};

export default ReadingtheRoomScreen2;
