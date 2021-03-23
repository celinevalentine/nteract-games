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
          <Button
            name="continue"
            backgroundColor={`var(--clr-continue)`}
            data-testid="button"
          />
        </Link>
      </StyledBtn>
    </Wrapper>
  );
};
export default ToggleViewRight;

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
    position: absolute;
    height: 99px;
    width: 60%;
    top: 25%;
    left: 20%;
    min-width: 350px;
    display: inline-block;
    padding: 40px;
  }
  img {
    padding: 0;
    margin: 0;
    width: 100px;
    min-width: 350px;
    vertical-align: top;
    left: 70%;
    position: absolute;
  }
`;
const StyledBtn = styled(Link)`
  z-index: 9;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
