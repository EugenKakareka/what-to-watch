import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render", () => {
  render(<App />);
  expect(screen.getByText("WTW")).toBeInTheDocument();
});
