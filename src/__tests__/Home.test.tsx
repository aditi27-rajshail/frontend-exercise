import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Home from "../pages/Home";
import { asideContainerData, asideTitle, mainData, title } from "../constants";

describe("Home Component", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders the main page title", () => {
    expect(screen.getByText(title).textContent).toBe(title);
  });

  it("renders the aside section title", () => {
    expect(screen.getByText(asideTitle).textContent).toBe(asideTitle);
  });

  it("renders the correct number of accordions", () => {
    const accordionElements = screen.getAllByRole("button");
    expect(accordionElements).toHaveLength(mainData.length);
  });

  it("renders the correct number of aside containers", () => {
    const asideElements = screen.getAllByTestId("aside-container");
    expect(asideElements).toHaveLength(asideContainerData.length);
  });
});
