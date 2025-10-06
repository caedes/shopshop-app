const BASE_URL = "http://localhost:3001";

const getFullUrl = (path: string) => `${BASE_URL}${path}`;

const createDefaultOptions = () => {
  const defaultOptions: RequestInit = {
    signal: AbortSignal.timeout(3000),
  };

  return defaultOptions;
};

const responseToJson = (response: Response) => response.json();

export const getProducts = (search: string) => () => {
  const path =
    search && search.length > 0 ? `/products?name_like=${search}` : "/products";

  return fetch(getFullUrl(path), {
    ...createDefaultOptions(),
  }).then(responseToJson);
};

export const getProduct = (productId?: string) => () =>
  fetch(getFullUrl(`/products/${productId}`), {
    ...createDefaultOptions(),
  }).then(responseToJson);
