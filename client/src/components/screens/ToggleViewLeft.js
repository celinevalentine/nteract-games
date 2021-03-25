import React from "react";
import chair from "../../images/chair.png";
import styled from "styled-components";

const ToggleViewLeft = () => {
  return (
    <Wrapper>
      <img src={chair} alt="chair" />

      <p>
        Being mindful of your surroundings can help make you more comfortable in
        new environments.{" "}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  text-align: center;
  img {
    transform: rotateY(180deg);
    padding: 0;
    margin: 0;
    width: 100px;
    min-width: 350px;
    vertical-align: top;
    left: 5%;
    position: absolute;
  }
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
`;

export default ToggleViewLeft;
