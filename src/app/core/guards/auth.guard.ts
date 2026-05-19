import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AUTH_SERVICE } from '../ports/auth.port';

/**
 * Route guard that restricts access to authenticated users.
 *
 * DIP: Uses the AUTH_SERVICE injection token instead of
 * depending on the concrete AuthService class.
 */
export const authGuard: CanActivateFn = () => {
  const auth = inject(AUTH_SERVICE);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
