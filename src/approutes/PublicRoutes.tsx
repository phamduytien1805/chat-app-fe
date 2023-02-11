import React, { ComponentType, FC, useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';

export interface Props extends RouteProps {}
const PublicRoutes: FC<Props> = ({ component, path, exact }) => {
  useEffect(() => {}, []);
  return <Route path={path} component={component} exact={exact} />;
};

export default PublicRoutes;
