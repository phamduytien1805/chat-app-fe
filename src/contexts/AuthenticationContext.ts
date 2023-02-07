import { User } from '../types/User';
import { createContext } from 'react';

export interface IAuthContext {
  user: User;
}

export const AuthenticationContext = createContext<IAuthContext>({} as IAuthContext);
