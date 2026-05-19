/**
 * Domain models for the OBS (Öğrenci Bilgi Sistemi) verification flow.
 *
 * Kept in the model layer so both the port (abstraction) and the
 * concrete service can reference them without circular dependencies.
 */

/** Payload sent to the OBS verification endpoint. */
export interface ObsVerificationData {
  readonly firstName: string;
  readonly lastName: string;
  readonly studentNumber: string;
  readonly department: string;
  readonly grade: string;
}

/** Response returned from the OBS verification endpoint. */
export interface ObsVerificationResponse {
  readonly verified: boolean;
  readonly message: string;
}
