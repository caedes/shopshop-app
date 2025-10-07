/**
 * A simple function to get a different image for each product.
 * Picsum has images with ids from 0 to 1084, so we add 20 to the product id
 * to avoid having the same image as the product id.
 *
 * It should be avoid in production code, but it's fine for this demo app.
 */
export const getImageId = (id: string) => {
  return Number(id) + 20;
};
