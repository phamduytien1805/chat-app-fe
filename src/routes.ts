import { Route as AppRoute } from './types';
import AuthenticationRoute from './modules/Auth/routes';
import DemoRoute from './components/routes';

export default [...AuthenticationRoute, ...DemoRoute] as AppRoute[];
