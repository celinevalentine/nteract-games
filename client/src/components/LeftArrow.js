import React from "react";
import leftArrow from "../images/leftArrow.svg";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const LeftArrow = () => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/");
  };
  return (
    <Wrapper onClick={clickHandler}>
      <img className="left-arrow" src={leftArrow} alt="left-arrow" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 5;
  position: absolute;
  height: 51px;
  width: 51px;
  left: 6px;
  top: 13px;
`;

export default LeftArrow;
