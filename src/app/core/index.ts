/**
 * Core layer — barrel exports.
 *
 * Provides a single, stable public API for the core layer.
 * Feature modules import from '@app/core' rather than reaching
 * into individual sub-folders.
 */

// ── Models ──────────────────────────────────────────────────────
export type { User, UserRole } from './models/user.model';
export type {
  ObsVerificationData,
  ObsVerificationResponse,
} from './models/obs-verification.model';

// ── Ports (abstractions) ────────────────────────────────────────
export type { IAuthService } from './ports/auth.port';
export { AUTH_SERVICE } from './ports/auth.port';

export type { IObsVerificationService } from './ports/obs-verification.port';
export { OBS_VERIFICATION_SERVICE } from './ports/obs-verification.port';

// ── Services (concrete implementations) ─────────────────────────
export { AuthService } from './services/auth.service';
export { ObsVerificationService } from './services/obs-verification.service';

// ── Guards ──────────────────────────────────────────────────────
export { authGuard } from './guards/auth.guard';
