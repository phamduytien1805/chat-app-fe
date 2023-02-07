import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Layout } from './components/Layout';
import { PageDefault } from './components/PageDefault';

import { AuthenticationContext, ThemeModeContext } from './contexts';
import { AppClient } from './clients';

import { Route as AppRoute } from './types';
import { getAppTheme } from './styles/theme';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';
import routes from './routes';
import { PrivateRoute } from './approutes';

function App() {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(DARK_MODE_THEME);
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

  // const addRoute = (route: AppRoute) => (
  //   <Route key={route.key} path={route.path} component={route.component || PageDefault} exact />
  // );
  for (const route of routes) {
    if (route.private) {
      privateRoutes.push(route);
    } else {
      publicRoutes.push(route);
    }
  }

  return (
    <AuthenticationContext.Provider value={appClient}>
      <ThemeModeContext.Provider value={themeMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Layout>
                {/* {[...routes, ...HomeRoute].map((route: AppRoute) =>
                  route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
                )} */}
                {privateRoutes.map((route) => (
                  <PrivateRoute key={route.key} path={route.path} exact />
                ))}
              </Layout>
            </Switch>
          </Router>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </AuthenticationContext.Provider>
  );
}

export default App;
