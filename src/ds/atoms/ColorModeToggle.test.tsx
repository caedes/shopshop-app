import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ColorModeToggle } from "./ColorModeToggle";
import userEvent from "@testing-library/user-event";
import { ColorModeProvider } from "../../color-mode/ColorModeProvider";

const getToggle = (mode: string) =>
  screen.getByRole("button", { name: new RegExp(`${mode}$`, "i") });

describe("ColorModeToggle", () => {
  it("displays light by default and changes to dark while clicking", async () => {
    const user = userEvent.setup();
    render(<ColorModeToggle />, { wrapper: ColorModeProvider });

    await user.click(getToggle("light"));

    expect(getToggle("dark")).toBeInTheDocument();
  });
});
