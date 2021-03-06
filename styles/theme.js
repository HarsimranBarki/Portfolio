import { theme as chakraTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = {
  ...chakraTheme,

  fonts: {
    ...chakraTheme.fonts,
    html: `Poppins`,
    heading: `Poppins`,
    body: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
    boldest: 800,
  },
  icons: {
    ...chakraTheme.icons,
  },
  colors: {
    ...chakraTheme.colors,
    lightPallete: {
      black: "#01020A",
      darkRed: "#801805",
      red: "#FF2E00",
      yellow: "#FEA82f",
      lightYellow: "#FFFECB",
      lightestYellow: "#FFFEDA",
      whiteYellow: "#FFFEE8",
      whitestYellow: "FFFFF3",
      white: "#FFFFFF",
    },
    darkPallete: {
      purple: "#272343",
      teal: "#34A3A3",
      lightTeal: "#BAE8E8",
      veryLightTeal: "#E3F6F5",
      white: "#FAFAFA",
      lightPurple: "#221F3B",
      darkPurple: "#1A1734",
      veryDarkPurple: "#13102A",
      blackPurple: "#0D0B1E",
    },
  },
  styles: {
    ...chakraTheme.styles,

    global: (props) => ({
      body: {
        color: mode("#01020A", "#FAFAFA")(props),
        bg: mode("#FFFECB", "#272343")(props),
      },
    }),
  },

  initialColorMode: "light",
  useSystemColorMode: false,
};

export default theme;
