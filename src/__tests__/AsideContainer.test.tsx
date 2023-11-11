import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import AsideContainer from "../components/AsideContainer";
import { asideContainerData } from "../constants";

describe("AsideContainer Component", () => {
  beforeEach(() => {
    render(<AsideContainer asideContainerData={asideContainerData[0]} />);
  });

  it("renders the aside container title", () => {
    expect(screen.getByText(asideContainerData[0].title).textContent).toBe(
      asideContainerData[0].title
    );
  });

  it("renders the aside container subText", () => {
    expect(screen.getByText(asideContainerData[0].subText).textContent).toBe(
      asideContainerData[0].subText
    );
  });

  it("matches the snapshot", () => {
    const { container } = render(
      <AsideContainer asideContainerData={asideContainerData[0]} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
