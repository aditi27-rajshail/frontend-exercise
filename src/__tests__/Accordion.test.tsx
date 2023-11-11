import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Accordion from "../components/Accordion/Accordion";
import { mainData } from "../constants";

describe("Accordion Component", () => {
  beforeEach(() => {
    render(<Accordion accordionData={mainData[0]} />);
  });

  it("renders the accordion title", () => {
    expect(screen.getByText(mainData[0].title).textContent).toBe(
      mainData[0].title
    );
  });

  it("renders the accordion subText", () => {
    expect(screen.getByText(mainData[0].subText).textContent).toBe(
      mainData[0].subText
    );
  });

  it("toggles accordion content on click", () => {
    // Gets the toggele button
    const toggleButton = screen.getByRole("button", {
      name: /expand section/i,
    });
    // Click to open
    fireEvent.click(toggleButton);
    expect(toggleButton.getAttribute("aria-expanded")).toBe("true");
    // Click to close
    fireEvent.click(toggleButton);
    expect(toggleButton.getAttribute("aria-expanded")).toBe("false");
  });

  it("matches the snapshot when closed", () => {
    const { container } = render(<Accordion accordionData={mainData[0]} />);
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot when opened", () => {
    const { container } = render(<Accordion accordionData={mainData[0]} />);
    const allToggleButtons = screen.getAllByRole("button", {
      name: /expand section/i,
    });
    // Open the first accordion
    fireEvent.click(allToggleButtons[0]);
    expect(container).toMatchSnapshot();
  });

  it("updates the ProgressBar when a check icon is checked", () => {
    // open accordion
    const toggleButton = screen.getByRole("button", {
      name: /expand section/i,
    });
    fireEvent.click(toggleButton);
    expect(toggleButton.getAttribute("aria-expanded")).toBe("true");

    // get check icon and click
    const checkboxImage = screen.getAllByRole("img", {
      name: /circle dashed/i,
    });
    fireEvent.click(checkboxImage[0]);

    const progressBarTextElements = screen.getAllByTestId("progress-text");
    progressBarTextElements.forEach((element) => {
      // remove whitespace
      expect(element.textContent).toMatch(/1\s*\/\s*2\s*ステップ/);
    });
  });
});
