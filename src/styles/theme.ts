import { Theme, createTheme, responsiveFontSizes } from '@mui/material';

import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../utils/constants';
import { themes } from './customTheme';

export const getAppTheme = (mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME): Theme => {
  const { palette, ...customTheme } = themes;
  let theme = createTheme({
    palette: {
      ...palette,
      mode,
    },
    ...customTheme,
  });
  theme = responsiveFontSizes(theme);
  return theme;
};
