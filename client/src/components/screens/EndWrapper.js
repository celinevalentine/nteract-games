import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledPromptBox = styled.div`
  z-index: 5;
  width: 70%;
  height: 100%;
  position: absolute;
  left: 48%;
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
    top: 8%;
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
    top: 15%;
    transform: translate(-50%, -50%);
    word-wrap: break-word;
    padding-left: 1rem;
  }

  img {
    width: 70%;
    min-height: 100px;
    left: 50%;
    top: 15%;
    transform: translate(-50%, -50%);
    position: absolute;
    margin-top: 1rem;
  }
`;
export const StyledButtons = styled(Link)`
  z-index: 9;
  position: absolute;
  left: 49%;
  top: 30%;
  transform: translate(-50%, -50%);
`;
