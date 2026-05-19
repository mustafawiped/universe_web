import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ObsVerificationData, ObsVerificationResponse } from '../models/obs-verification.model';

/**
 * Port (abstract contract) for OBS student verification.
 *
 * Allows swapping between a mock implementation and a real HTTP-backed
 * one without modifying any consumer component (OCP + DIP).
 */
export interface IObsVerificationService {
  /**
   * Verify student credentials against the OBS system.
   * @returns An observable that emits the verification result.
   */
  verifyStudent(data: ObsVerificationData): Observable<ObsVerificationResponse>;
}

/** DI token for IObsVerificationService. */
export const OBS_VERIFICATION_SERVICE = new InjectionToken<IObsVerificationService>(
  'OBS_VERIFICATION_SERVICE',
);
