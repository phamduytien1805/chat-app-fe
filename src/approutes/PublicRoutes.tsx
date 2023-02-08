import React, { ComponentType, FC, useEffect } from 'react';
import { Route } from 'react-router-dom';

export interface Props {
  component?: ComponentType;
  path?: string;
  exact: boolean;
}
const PublicRoutes: FC<Props> = ({ component, path, exact }) => {
  useEffect(() => {}, []);
  return <Route path={path} component={component} exact={exact} />;
};

export default PublicRoutes;
