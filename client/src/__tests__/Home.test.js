import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../components/screens";
import { BrowserRouter } from "react-router-dom";

describe("test Home component for With Link", () => {
  it("should match with snapshot", () => {
    const homepage = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(homepage).toMatchSnapshot();
  });
});
