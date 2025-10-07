import { expect, test } from "vitest";
import { getImageId } from "./image";

test("getImageId returns the ID plus 20", () => {
  expect(getImageId("1")).toBe(21);
});
