import React from "react";
import promptbox from "../../images/promptbox.png";
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
  border-radius: 10px;
  margin: 2rem;
  padding: 2rem;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);

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
    top: 20%;
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
`;

export default PromptBox;
