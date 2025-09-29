import { ColorModes } from "../../color-mode/types";
import { useColorMode } from "../../color-mode/useColorMode";

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <button onClick={toggleColorMode}>
      {colorMode === ColorModes.LIGHT ? "🌞 LIGHT" : "🌜 DARK"}
    </button>
  );
};
