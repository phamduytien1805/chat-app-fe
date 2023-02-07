import { Route as AppRoute } from './types';
import AuthenticationRoute from './modules/Auth/routes';
export default [...AuthenticationRoute] as AppRoute[];
