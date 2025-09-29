import { createContext, useState } from "react";

import { ColorModes, type ColorMode, type ColorModeContextType } from "./types";

export const ColorModeContext = createContext<ColorModeContextType | null>(
  null
);

export const ColorModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    if (!window.matchMedia) return ColorModes.LIGHT;

    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? ColorModes.LIGHT
      : ColorModes.DARK;
  });

  const toggleColorMode = () => {
    setColorMode((prevColorMode) =>
      prevColorMode === ColorModes.LIGHT ? ColorModes.DARK : ColorModes.LIGHT
    );
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
