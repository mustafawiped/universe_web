/**
 * Domain model: User entity.
 *
 * Centralised here so every layer imports from a single source of truth
 * instead of coupling to a specific service file.
 */

/** Discriminated union for role-based access control. */
export type UserRole = 'admin' | 'user';

/** Core user entity returned after authentication. */
export interface User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly avatar?: string;
  readonly role: UserRole;
}
