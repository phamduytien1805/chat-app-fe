import { AuthenticationContext, IAuthContext } from '../contexts/AuthenticationContext';

import { User } from '../types/User';

class AuthService implements IAuthContext {
  user: User;

  /**
   * Creates an instance of AppClient.
   * @memberof AppClient
   */
  constructor() {
    this.user = {
      id: '1',
      name: 'Dwight Schrute',
      email: 'dwight.schrute@welcomedeveloper.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      isAdmin: true,
      isActive: true,
      isVerified: true,
    };
  }
}

export default AuthService;
