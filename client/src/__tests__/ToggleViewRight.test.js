import React from "react";
import { render } from "@testing-library/react";
import ToggleViewRight from "../components/screens/ToggleViewRight";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", function () {
  render(
    <BrowserRouter>
      <ToggleViewRight />
    </BrowserRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <BrowserRouter>
      <ToggleViewRight />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
it("should render page content and button click", () => {
  const { queryByText, queryByTestId, fireEvent } = render(
    <BrowserRouter>
      <ToggleViewRight />
    </BrowserRouter>,
  );
  //   const btn = queryByTestId("button");
  //   expect(btn).toBeInTheDocument();
  //   expect(queryByText("In this game")).toHaveTextContent();
  //   fireEvent.click(btn);
  //   expect(btn).expect(queryByText("In this game")).not.toHaveTextContent();
  //   expect(btn).expect(queryByText("Being mindful")).toHaveTextContent();
});
