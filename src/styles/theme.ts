import { Theme, createTheme, responsiveFontSizes } from '@mui/material';

import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../utils/constants';
import { themes } from './customTheme';

export const getAppTheme = (mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME): Theme => {
  const { palette, colors, ...customTheme } = themes;
  let theme = createTheme({
    palette: {
      ...palette,
      mode,
    },
    colors,
    modeColors: {
      ...(mode === 'light'
        ? {
            primary: {
              ...colors.light,
            },
          }
        : {
            primary: {
              ...colors.dark,
            },
          }),
    },
    ...customTheme,
  });
  theme = responsiveFontSizes(theme);
  return theme;
};
