import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  thumb: {
    bg: "white",
    _checked: {
      bg: "#332F2E",
    },
  },
  track: {
    bg: "#332F2E",
    _checked: {
      bg: "white",
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
