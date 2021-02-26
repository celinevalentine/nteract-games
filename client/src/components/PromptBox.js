import React from "react";
import promptbox from "../images/promptbox.png";
import styled from "styled-components";

const PromptBox = ({ title, msg, proTips, task }) => {
  return (
    <Wrapper className="promptbox">
      <img src={promptbox} alt="prompt-box" />
      <h3 className="promptbox-title">{title}</h3>
      <small className="promptbox-msg">{msg}</small>
      <p className="promptbox-protips">{proTips}</p>
      <h4 className="promptbox-task">{task}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 5;
  width: 75%;
  height: 100%;
  position: absolute;
  left: 48%;
  top: 50%;
  margin: 2rem 2rem;
  transform: translate(-50%, -50%);
  display: block;
  word-wrap: break-word;

  h3 {
    font-family: var(--ff-ternary);
    font-size: 36px;
    font-weight: bold;
    line-height: 57px;
    text-align: center;
    z-index: 9;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -50%);
  }
  h4 {
    font-family: var(--ff-secondary);
    font-size: 24px;
    font-weight: bold;
    line-height: 57px;
    text-align: center;
    z-index: 9;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  p {
    font-family: var(--ff-primary);
    font-size: 21px;
    line-height: 28px;
    margin-top: 1rem;
    margin-left: 0.5rem;
    text-align: center;
    z-index: 9;
    position: absolute;
    left: 50%;
    top: 30%;
    width: 40%;
    height: 50%;
    transform: translate(-50%, -50%);
  }
  small {
    font-family: var(--ff-primary);
    font-size: 21px;
    line-height: 28px;
    text-align: center;
    z-index: 9;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 70%;
    min-height: 100px;
    left: 50%;
    top: 32%;
    transform: translate(-50%, -50%);
    position: absolute;
    margin-top: 1rem;
  }
`;

export default PromptBox;
