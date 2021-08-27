import { render, screen } from "@testing-library/react";

import { FlexRig } from "./FlexRig";

describe("FlexRig", () => {
  test("Should add additional CSS classes", () => {
    render(<FlexRig className="flex-rig" />);
    const element = screen.getByTestId("flex-rig");

    const expected = true;
    const actual = element.classList.contains("flex-rig");

    expect(actual).toBe(expected);
  });

  test("Should support direction", () => {
    render(<FlexRig direction="column" />);
    const element = screen.getByTestId("flex-rig");

    const expected = "column";
    const actual = getComputedStyle(element).getPropertyValue("flex-direction");

    expect(actual).toBe(expected);
  });

  test("Should support explicit wrap", () => {
    render(<FlexRig wrap />);
    const element = screen.getByTestId("flex-rig");

    const expected = "wrap";
    const actual = getComputedStyle(element).getPropertyValue("flex-wrap");

    expect(actual).toBe(expected);
  });

  test("Should support explicit nowrap", () => {
    render(<FlexRig wrap={false} />);
    const element = screen.getByTestId("flex-rig");

    const expected = "nowrap";
    const actual = getComputedStyle(element).getPropertyValue("flex-wrap");

    expect(actual).toBe(expected);
  });

  test("Should support justify-content", () => {
    render(<FlexRig justifyContent="center" />);
    const element = screen.getByTestId("flex-rig");

    const expected = "center";
    const actual =
      getComputedStyle(element).getPropertyValue("justify-content");

    expect(actual).toBe(expected);
  });

  test("Should support align-content", () => {
    render(<FlexRig alignContent="space-around" />);
    const element = screen.getByTestId("flex-rig");

    const expected = "space-around";
    const actual = getComputedStyle(element).getPropertyValue("align-content");

    expect(actual).toBe(expected);
  });

  test("Should support align-items", () => {
    render(<FlexRig alignItems="baseline" />);
    const element = screen.getByTestId("flex-rig");

    const expected = "baseline";
    const actual = getComputedStyle(element).getPropertyValue("align-items");

    expect(actual).toBe(expected);
  });
});
