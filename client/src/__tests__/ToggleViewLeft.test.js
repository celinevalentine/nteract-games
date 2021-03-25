import React from "react";
import { render } from "@testing-library/react";
import ToggleViewLeft from "../components/screens/ToggleViewLeft";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", function () {
  render(<ToggleViewLeft />);
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <BrowserRouter>
      <ToggleViewLeft />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
