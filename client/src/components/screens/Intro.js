import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import chair from "../../images/chair.png";
import ellipse from "../../images/ellipse.svg";
import ellipseLight from "../../images/ellipseLight.svg";

const Intro = () => {
  const [toggleView, setToggleView] = useState(false);

  const clickHandler = () => {
    setToggleView(!toggleView);
  };
  return (
    <>
      <section>
        <h1 className="text-center">Reading The Room</h1>
        {toggleView ? (
          <div id="screen1">
            <img id="chair" src={chair} alt="chair" />
            <p className="gameIntroWords">
              {" "}
              Being mindful of your surroundings can help make you more
              comfortable in new environments.
            </p>
            <Link to="/reading-the-room/games">
              <Button btnClass="inGameButtonDiv" name="Continue" />
            </Link>
          </div>
        ) : (
          <div id="screen2">
            <img id="chair2" src={chair} alt="chair" />
            <p className="gameIntroWords">
              {" "}
              In this game, your goal is to complete 5 different tasks before
              the timer runs out.
            </p>
          </div>
        )}

        <div className="ellipses">
          <img id="ellipse" src={ellipse} alt="elipse" onClick={clickHandler} />
          <img
            id="ellipseLight"
            src={ellipseLight}
            alt="elipse light"
            onClick={clickHandler}
          />
        </div>
      </section>
    </>
  );
};

export default Intro;
