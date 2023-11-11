import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { title } from "../constants";

describe("Renders Home page correctly via App", async () => {
  it("render the title on Home page correctly", async () => {
    render(<App />);
    expect(screen.getByText(title).textContent).toBe(title);
  });
});
