/* eslint-disable @typescript-eslint/no-explicit-any */
import colors from './colors.json';
import { fontFamily, fontSize, fontSizeIcon, fontWeight } from './font';
import typography from './typography';
import { borderInput, borderRadius } from './border';
import elevations from './elevations';
interface CustomThemeProperties {
  sideBar: Record<string, any>;
  colors: Record<string, any>;
  fontSize: Record<string, any>;
  fontSizeIcon: Record<string, any>;
  fontWeight: Record<string, any>;
  borderInput: Record<string, any>;
  borderRadius: Record<string, any>;
  transitionDefault: string;
  boxShadowDefault: string;
  elevations: Record<string, any>;
}

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Record<string, unknown>;
  }
  interface PaletteOptions {
    tertiary?: Record<string, unknown>;
  }
  interface TypeBackground {
    main: string;
  }
  interface Components {
    MuiClockPicker: Record<string, unknown>;
  }
  interface ThemeOptions extends CustomThemeProperties {}
  interface Theme extends CustomThemeProperties {}
}

// A custom theme for this app
export const themes = {
  palette: {
    primary: {
      main: colors.primary[40],
      light: colors.primary[40],
      dark: colors.primary[80],
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary[40],
      light: colors.secondary[40],
      dark: colors.secondary[80],
      contrastText: colors.white,
    },
  },
  typography: {
    fontFamily,
    fontSize: 15,
    // new system
    ...typography,
  },
  spacing: 8,
  sideBar: {
    openWidth: 300,
    width: 72,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            webkitBoxShadow: '0 0 0 1000px white inset',
          },
        },
      },
    },
    MuiClockPicker: {
      styleOverrides: {
        root: {
          '& .MuiButtonBase-root': {
            fontSize: 'inherit',
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xs: 480,
      sm: 600,
      md: 960,
      lg: 1366,
      xl: 1920,
    },
  },
  zIndex: {},
  // ===COLORS===
  colors, // / New color System

  globalColors: {
    placeholderColor: colors.gray[500],
  },
  // ===FONT SIZE===
  fontSize,
  // ===FONT SIZE ICON===
  fontSizeIcon,
  // ===FONT WEIGHT===
  fontWeight,
  // ===FONT WEIGHT===
  borderInput,
  borderRadius,
  // ===TRANSITION DEFAULT===
  transitionDefault: 'all 200ms ease-in-out',
  // ===BOX SHADOW DEFAULT===
  boxShadowDefault: 'rgba(235,241,249,1) 0 0 0 3px',
  elevations,
};
