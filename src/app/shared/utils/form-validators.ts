/**
 * Pure validation utility functions.
 *
 * Extracted from LoginComponent and RegisterComponent to eliminate
 * duplicated validation logic (DRY) and keep components lean (SRP).
 *
 * All functions are stateless and side-effect-free.
 */

/** Result of a validation check. */
export interface ValidationResult {
  readonly valid: boolean;
  readonly message: string;
}

/** Validate basic login credentials. */
export function validateLoginCredentials(
  email: string,
  password: string,
): ValidationResult {
  if (!email || !password) {
    return { valid: false, message: 'E-posta ve şifre alanları boş bırakılamaz.' };
  }

  if (password.length < 6) {
    return { valid: false, message: 'Şifre en az 6 karakter olmalıdır.' };
  }

  return { valid: true, message: '' };
}

/** Validate the OBS verification form before submission. */
export function validateObsForm(
  firstName: string,
  studentNumber: string,
): ValidationResult {
  if (!firstName || !studentNumber) {
    return {
      valid: false,
      message: 'Lütfen en az Ad ve Öğrenci Numarası alanlarını doldurunuz.',
    };
  }

  return { valid: true, message: '' };
}

/** Validate the registration password field. */
export function validateRegistrationPassword(password: string): ValidationResult {
  if (!password || password.length < 6) {
    return {
      valid: false,
      message: 'Lütfen en az 6 karakterli bir şifre belirleyin.',
    };
  }

  return { valid: true, message: '' };
}
