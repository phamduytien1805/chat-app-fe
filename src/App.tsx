import { useMemo, useState } from 'react';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthenticationContext, ThemeModeContext } from './contexts';
import { AppClient } from './clients';
import 'material-symbols/rounded.css';

import { Route as AppRoute } from './types';
import { getAppTheme } from './styles/theme';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';
import routes from './routes';
import { PrivateRoute } from './approutes';
import PublicRoutes from './approutes/PublicRoutes';
import globalStyles from './globalStyles';
function App() {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(LIGHT_MODE_THEME);
  const [locale, setLocale] = useState(localStorage.getItem('lang') || 'en');

  const appClient = new AppClient();

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
      },
    }),
    []
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const privateRoutes: AppRoute[] = [];
  const publicRoutes: AppRoute[] = [];

  for (const route of routes) {
    if (route.private) {
      privateRoutes.push(route);
    } else {
      publicRoutes.push(route);
    }
  }

  const setLocaleContext = (locale: string) => {
    setLocale(locale);
  };

  return (
    <AuthenticationContext.Provider value={appClient}>
      <GlobalStyles styles={globalStyles} />
      <ThemeModeContext.Provider value={themeMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              {privateRoutes.map((route) => (
                <PrivateRoute key={route.key} path={route.path} component={route.component} exact />
              ))}
              {publicRoutes.map((route) => (
                <PublicRoutes key={route.key} path={route.path} component={route.component} exact />
              ))}
            </Switch>
          </Router>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </AuthenticationContext.Provider>
  );
}

export default App;
