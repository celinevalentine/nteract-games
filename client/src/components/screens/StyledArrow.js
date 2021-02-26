import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledArrow = styled(Link)`
  z-index: 9;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 3px;
  left: 25px;
  cursor: pointer;
`;
