import { ComponentType, FC, useContext } from 'react';
import { AuthenticationContext } from '../contexts';
import { isEmpty } from 'lodash';
import { APP_ROUTE } from '../utils/constants';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface Props extends RouteProps {}

export const PrivateRoute: FC<Props> = ({ component, path, exact = true }) => {
  const { user } = useContext(AuthenticationContext);
  if (isEmpty(user)) {
    return <Redirect to={APP_ROUTE.LOGIN} />;
  }
  return <Route path={path} component={component} exact={exact} />;
};
