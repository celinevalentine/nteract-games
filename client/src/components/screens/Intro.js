import React, { useState } from "react";

import ellipse from "../../images/ellipse.svg";
import ellipseDark from "../../images/ellipseLight.svg";
import styled from "styled-components";
import ToggleViewLeft from "./ToggleViewLeft";
import ToggleViewRight from "./ToggleViewRight";
import LeftArrow from "./LeftArrow";

const Intro = () => {
  const [toggleView, setToggleView] = useState(false);

  const clickHandler = () => {
    setToggleView(!toggleView);
  };
  return (
    <Wrapper>
      <LeftArrow />
      <h1>Reading The Room</h1>
      {toggleView ? <ToggleViewLeft /> : <ToggleViewRight />}

      <div className="circleButtons">
        <img
          className="lightCircle"
          src={ellipse}
          alt="button 2"
          onClick={clickHandler}
        />
        <img
          className="darkCircle"
          src={ellipseDark}
          alt="button 1"
          onClick={clickHandler}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  min-height: 80vh;
  display: block;
  margin: 0;
  padding: 0;
  text-align: center;
  }
  h1 {
    margin: 5rem auto;
    font: var(--ff-ternary);
    text-align:center;
    font-size: 46px; 
  }
  .circleButtons {
    margin-top: -7rem;
  }
.darkCircle {
  margin-left: 1rem;
  background: #ececec;
  border-radius: 10px;
  cursor: pointer;
}
.lightCircle {
  border-radius: 10px;
  background: #b7b7b7;
  cursor: pointer;
} 

`;

export default Intro;
