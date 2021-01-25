import React from "react";
import chair from "../images/chair.png";
import ellipse from "../images/ellipse.svg";
import ellipseLight from "../images/ellipseLight.svg";

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
      <img src={ellipse} alt="elipse" />
      <img src={ellipseLight} alt="elipse light" />
    </div>
  );
};

export default ReadingtheRoomScreen1;
