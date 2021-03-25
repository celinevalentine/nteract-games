import React from "react";
import { render } from "@testing-library/react";
import Intro from "../components/screens/Intro";

it("renders without crashing", function () {
  render(<Intro />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Intro />);
  expect(asFragment()).toMatchSnapshot();
});

it("checks if h1 exists", function () {
  const { queryByText } = render(<Intro />);

  expect(queryByText("Reading The Room")).toBeInTheDocument();
});
