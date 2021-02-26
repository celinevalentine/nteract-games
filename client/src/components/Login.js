import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import turtles from "../images/turtles.png";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <section className="container">
        <img src={turtles} alt="turtles" />
        <h1>nteract</h1>
        <h3>Play fun games to improve your social skills!</h3>
        <button className="btn" onClick={loginWithRedirect}>
          Log In / Sign Up
        </button>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgreen;
  .container {
    width: 80vw;
    max-width: 650px;
    text-align: center;
  }
  img {
    margin-top: -15rem;
  }
  h1 {
    margin-bottom: 4rem;
  }
  button {
    margin-top: 6rem;
    background-color: var(--clr-continue);
  }
`;
export default Login;
