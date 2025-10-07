import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ShoppingCartItem } from "./ShoppingCartItem";

describe("ShoppingCartItem", () => {
  it("displays a title and its quantity", () => {
    render(<ShoppingCartItem productName="Television" quantity={1} />);

    expect(
      screen.getByRole("heading", { name: "Television" })
    ).toBeInTheDocument();

    expect(screen.getByRole("paragraph")).toHaveTextContent("Quantity: 1");
  });
});
