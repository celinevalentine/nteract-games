import React from "react";
import { render, screen } from "@testing-library/react";
import Games from "../components/screens/Games";
import { GameProvider } from "../components/context/GameContext";

jest.mock("../components/context/GameContext");
test("should show a list of games", () => {
  render(<Games />);
  expect(screen.getByText("Choose A Scenario")).toBeInTheDocument();
  expect(GameProvider).toHaveBeenCalledTimes(1);
  expect(GameProvider).toHaveBeenCalledWith();
});
