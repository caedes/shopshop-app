import { act, render, renderHook, screen } from "@testing-library/react";
import { afterAll, describe, expect, it } from "vitest";
import { ShoppingCartPage } from "./ShoppingCartPage";
import { createRoutesStub } from "react-router";
import { defineNavigatorLanguage } from "../../test-utils";
import { useShoppingCart } from "../../shopping-cart/useShoppingCart";

describe("ShoppingCartPage", () => {
  const originalNavigatorLanguage = navigator.language;

  afterAll(() => {
    defineNavigatorLanguage(originalNavigatorLanguage);
  });

  it("displays title, the shopping cart items, the total and the Purchase button when cart is empty", () => {
    defineNavigatorLanguage("fr-FR");
    const Stub = createRoutesStub([
      {
        path: "/shopping-cart",
        Component: ShoppingCartPage,
      },
    ]);
    render(<Stub initialEntries={["/shopping-cart"]} />);

    expect(
      screen.getByRole("heading", { name: "Your Shopping Cart" })
    ).toBeInTheDocument();

    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();

    expect(screen.getByText("Total :")).toBeInTheDocument();
    expect(screen.getByText("0,00 €")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Purchase" })
    ).toBeInTheDocument();
  });

  it("displays title, the shopping cart items, the total and the Purchase button when cart is populated", () => {
    defineNavigatorLanguage("fr-FR");
    const Stub = createRoutesStub([
      {
        path: "/shopping-cart",
        Component: ShoppingCartPage,
      },
    ]);
    render(<Stub initialEntries={["/shopping-cart"]} />);

    const { result } = renderHook(() => useShoppingCart());

    expect(result.current.shoppingCartItems).toHaveLength(0);

    act(() => {
      result.current.addToCart({
        id: "1",
        productName: "Product 1",
        price: 10,
        quantity: 2,
      });
      result.current.addToCart({
        id: "2",
        productName: "Product 2",
        price: 5,
        quantity: 1,
      });
    });

    expect(
      screen.getByRole("heading", { name: "Your Shopping Cart" })
    ).toBeInTheDocument();

    expect(screen.queryByText("Your cart is empty.")).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Product 1" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Product 2" })
    ).toBeInTheDocument();

    expect(screen.getByText("Total :")).toBeInTheDocument();
    expect(screen.getByText("25,00 €")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Purchase" })
    ).toBeInTheDocument();
  });
});
