import { render, screen } from "@testing-library/react";
import { afterAll, describe, expect, it } from "vitest";
import { Price } from "./Price";
import { defineNavigatorLanguage } from "../../test-utils";

describe("Price", () => {
  const originalNavigatorLanguage = navigator.language;

  afterAll(() => {
    defineNavigatorLanguage(originalNavigatorLanguage);
  });

  it("renders price in english", () => {
    defineNavigatorLanguage("en-GB");

    render(<Price amount={12.34} />);

    expect(screen.getByText("€12.34")).toBeInTheDocument();
  });

  it("renders price in french", () => {
    defineNavigatorLanguage("fr-FR");

    render(<Price amount={12.34} />);

    expect(screen.getByText("12,34 €")).toBeInTheDocument();
  });
});
