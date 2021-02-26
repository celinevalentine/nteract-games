import React from "react";
import { Link } from "react-router-dom";
import chair from "../../images/chair.png";

import styled from "styled-components";
import { Button } from "..";

const ToggleViewRight = () => {
  return (
    <Wrapper>
      <p>
        {" "}
        In this game, your goal is to complete 5 different tasks before the
        timer runs out.{" "}
      </p>
      <img src={chair} alt="chair" />
      <StyledBtn>
        <Link to="/reading-the-room/games">
          <Button name="continue" backgroundColor={`var(--clr-continue)`} />
        </Link>
      </StyledBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  text-align: center;
  p {
    font-family: var(--ff-primary);
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    word-wrap: break-word;
    width: 455px;
    height: 99px;
    width: 60%;
    min-width: 350px;
    display: inline-block;
    padding: 40px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  img {
    padding: 0;
    margin: 0;
    width: 30%;
    min-width: 350px;
    vertical-align: top;
  }
`;

const StyledBtn = styled(Link)`
  z-index: 9;
`;

export default ToggleViewRight;
