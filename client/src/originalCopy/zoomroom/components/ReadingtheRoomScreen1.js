import React from "react";
import chair from "../images/chair.png";
import ellipse from "../images/ellipse.svg";
import ellipseLight from "../images/ellipseLight.svg";
import { Link } from "react-router-dom";

const ReadingtheRoomScreen1 = () => {
  return (
    <div>
      <h1 className="gameIntroTitle">Reading The Room</h1>
      <img src={chair} alt="chair" />
      <p className="gameIntroWords">
        {" "}
        Being mindful of your surroundings can help make you more comfortable in
        new environments.
      </p>
      <div className="ellipses">
        <Link exact to="/readingtheroom/screen/2">
          <img id="ellipse" src={ellipse} alt="elipse" />
        </Link>
        <Link exact to="/readingtheroom/screen/1">
          <img id="ellipseLight" src={ellipseLight} alt="elipse light" />
        </Link>
      </div>
    </div>
  );
};

export default ReadingtheRoomScreen1;
