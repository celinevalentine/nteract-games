import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCtdBtn = styled(Link)`
  z-index: 9;
  position: absolute;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -50%);
`;
export default StyledCtdBtn;