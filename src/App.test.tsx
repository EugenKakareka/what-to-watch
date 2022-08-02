import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(screen.getByText(/The Batman/i)).toBeInTheDocument();
    expect(screen.getByAltText(/The Batman/i)).toBeInTheDocument();
  });
});

describe("Click in App", () => {
  it("it should click on favorite", () => {
    const { getAllByRole } = render(<App />);
    const likes = getAllByRole("checkbox");
    likes.forEach((like) => {
      expect(like).not.toBeChecked();
      act(() => {
        fireEvent.click(like);
      });
      expect(like).toBeChecked();
    });
  });
});
