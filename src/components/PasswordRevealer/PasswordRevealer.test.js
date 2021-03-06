import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PasswordRevealer from "./index";

afterEach(cleanup);

describe("PasswordRevealer Component", () => {
  it("Component render", () => {
    const { getByTestId } = render(<PasswordRevealer />);
    const button = getByTestId("password-revealer");
    expect(button.toBeTruthy);
  });
});
