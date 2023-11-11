import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import AccordionDetails from "../components/Accordion/AccordionDetails";
import { mainData } from "../constants";
import { actionBtnHandlers } from "../logic/actionBtnHandlers";

describe("Accordion Details Component", () => {
  describe("Accordion Details renderes component correctly", () => {
    beforeEach(() => {
      render(
        <AccordionDetails
          accordionDetails={mainData[0].accordionDetails[0]}
          onToggle={() => {}}
          isChecked={false}
          disabled={false}
        />
      );
    });

    it("renders the title", () => {
      const title = mainData[0].accordionDetails[0].title;
      const titleElement = screen.getByText(title);
      expect(titleElement.textContent).toBe(title);
    });

    it("renders the subText", () => {
      const subText = mainData[0].accordionDetails[0].subText;
      const subTextElement = screen.getByText(subText);
      expect(subTextElement.textContent).toBe(subText);
    });

    it("renders the empty dashed icon if isChecked is false", () => {
      const checkboxImage = screen.getByRole("img", {
        name: /circle dashed/i,
      });
      expect(checkboxImage).toBeDefined();
    });

    it("renders the green check icon if isChecked is true", () => {
      render(
        <AccordionDetails
          accordionDetails={mainData[1].accordionDetails[0]}
          onToggle={() => {}}
          isChecked={true}
          disabled={false}
        />
      );
      const checkboxImage = screen.getByRole("img", {
        name: /check circle/i,
      });
      expect(checkboxImage).toBeDefined();
    });

    it("renders the chip span if tag is provided", () => {
      const tag = mainData[0].accordionDetails[0].tag;
      const subTextElement = screen.getByText(tag);
      expect(subTextElement.textContent).toBe(tag);
    });

    it("renders the Button Component with text and right arrow", () => {
      const buttonElement = screen.getByRole("button", {
        name: `${mainData[0].accordionDetails[0].buttonText} Right Arrow`,
      });
      expect(buttonElement).toBeDefined();
    });

    it("calls button click handler when the button is clicked", () => {
      const actionKey = mainData[0].accordionDetails[0].btnAction;
      const actionHandlerSpy = vi.spyOn(actionBtnHandlers, actionKey);
      const buttonElement = screen.getByRole("button", {
        name: `${mainData[0].accordionDetails[0].buttonText} Right Arrow`,
      });
      fireEvent.click(buttonElement);

      expect(actionHandlerSpy).toHaveBeenCalled();
    });

    it("renders the Alert Component if info is provided", () => {
      const infoText = mainData[1].accordionDetails[0].info;
      render(
        <AccordionDetails
          accordionDetails={mainData[1].accordionDetails[0]}
          onToggle={() => {}}
          isChecked={false}
          disabled={false}
        />
      );
      const alertElement = screen.getByText(infoText);
      expect(alertElement.textContent).toBe(infoText);
    });
  });

  it("calls onToggle when the check icon is clicked", () => {
    const onToggleMock = vi.fn();
    render(
      <AccordionDetails
        accordionDetails={mainData[0].accordionDetails[0]}
        onToggle={onToggleMock}
        isChecked={false}
        disabled={false}
      />
    );
    const checkboxImage = screen.getByRole("img", {
      name: /circle dashed/i,
    });
    fireEvent.click(checkboxImage);
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });

  it("does not call onToggle when disabled is true", () => {
    const onToggleMock = vi.fn();
    render(
      <AccordionDetails
        accordionDetails={mainData[0].accordionDetails[0]}
        onToggle={onToggleMock}
        isChecked={false}
        disabled={true}
      />
    );
    const checkboxImage = screen.getByRole("img", {
      name: /circle dashed/i,
    });
    fireEvent.click(checkboxImage);
    expect(onToggleMock).not.toHaveBeenCalled();
  });

  it("matches the snapshot", () => {
    const { container } = render(
      <AccordionDetails
        accordionDetails={mainData[0].accordionDetails[0]}
        onToggle={() => {}}
        isChecked={false}
        disabled={false}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
