import { InjectionToken, WritableSignal } from '@angular/core';
import { User } from '../models/user.model';

/**
 * Port (abstract contract) for authentication operations.
 *
 * Following the Dependency Inversion Principle, consumers depend on
 * this abstraction rather than the concrete AuthService implementation.
 * The concrete implementation is registered via the InjectionToken
 * in `app.config.ts`.
 */
export interface IAuthService {
  /** Reactive signal holding the currently authenticated user (or null). */
  readonly currentUser: WritableSignal<User | null>;

  /** Reactive signal indicating whether a user is authenticated. */
  readonly isLoggedIn: WritableSignal<boolean>;

  /**
   * Attempt to authenticate with the given credentials.
   * @returns `true` if authentication succeeded.
   */
  login(email: string, password: string): boolean;

  /** Clear the current session and reset auth state. */
  logout(): void;
}

/** DI token for IAuthService — use `inject(AUTH_SERVICE)` in consumers. */
export const AUTH_SERVICE = new InjectionToken<IAuthService>('AUTH_SERVICE');
