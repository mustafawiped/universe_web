/**
 * Shared layer — barrel exports.
 */

// ── Components ──────────────────────────────────────────────────
export { ParticleCanvasComponent } from './components/particle-canvas/particle-canvas';

// ── Utilities ───────────────────────────────────────────────────
export type { ValidationResult } from './utils/form-validators';
export {
  validateLoginCredentials,
  validateObsForm,
  validateRegistrationPassword,
} from './utils/form-validators';
