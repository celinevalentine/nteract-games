import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>sorry, the page you tried cannot be found</h3>
        <Link to="/">
          <Button name="back home" backgroundColor={`var(--clr-continue)`} />
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
    color: lightgreen;
    margin-bottom: 2rem;
  }
  h3 {
    color: var(--clr-continue);
    margin-bottom: 2rem;
  }
`;
export default Error;
