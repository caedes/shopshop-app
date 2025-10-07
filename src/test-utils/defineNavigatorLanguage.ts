export const defineNavigatorLanguage = (language: string) =>
  Object.defineProperty(navigator, "language", {
    writable: true,
    configurable: true,
    value: language,
  });
