import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import { IAuthService } from '../ports/auth.port';

/**
 * Concrete authentication service.
 *
 * Responsibilities (SRP):
 *  - Manage authentication state (signals).
 *  - Persist / hydrate user data from localStorage.
 *
 * Navigation after login/logout is NOT handled here — that is the
 * responsibility of the calling component (SRP compliance).
 */
@Injectable({ providedIn: 'root' })
export class AuthService implements IAuthService {
  private static readonly STORAGE_KEY = 'universe_user';

  readonly currentUser = signal<User | null>(this.loadUser());
  readonly isLoggedIn = signal<boolean>(!!this.loadUser());

  login(email: string, password: string): boolean {
    if (!email || password.length < 6) {
      return false;
    }

    const user: User = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
      role: email.includes('admin') ? 'admin' : 'user',
    };

    localStorage.setItem(AuthService.STORAGE_KEY, JSON.stringify(user));
    this.currentUser.set(user);
    this.isLoggedIn.set(true);
    return true;
  }

  logout(): void {
    localStorage.removeItem(AuthService.STORAGE_KEY);
    this.currentUser.set(null);
    this.isLoggedIn.set(false);
  }

  // ── Private helpers ───────────────────────────────────────────

  private loadUser(): User | null {
    const data = localStorage.getItem(AuthService.STORAGE_KEY);
    return data ? (JSON.parse(data) as User) : null;
  }
}
