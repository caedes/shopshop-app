export const ColorModes = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type ColorMode = (typeof ColorModes)[keyof typeof ColorModes];

export type ColorModeContextType = {
  colorMode: ColorMode;
  toggleColorMode: () => void;
};
