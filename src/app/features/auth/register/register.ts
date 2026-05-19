import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AUTH_SERVICE } from '../../../core/ports/auth.port';
import { OBS_VERIFICATION_SERVICE } from '../../../core/ports/obs-verification.port';
import { ObsVerificationData } from '../../../core/models/obs-verification.model';
import {
  validateObsForm,
  validateRegistrationPassword,
} from '../../../shared/utils/form-validators';

/**
 * RegisterComponent — OBS-integrated student registration.
 *
 * SRP: Orchestrates the multi-step registration UI. Delegates:
 *   - OBS verification → IObsVerificationService (via DI token)
 *   - Authentication → IAuthService (via DI token)
 *   - Validation → form-validators utility
 *   - Navigation → Angular Router
 *
 * DIP: Depends on injection tokens, not concrete services.
 */
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class RegisterComponent {
  private readonly obsService = inject(OBS_VERIFICATION_SERVICE);
  private readonly auth = inject(AUTH_SERVICE);
  private readonly router = inject(Router);

  studentData: ObsVerificationData = {
    firstName: '',
    lastName: '',
    studentNumber: '',
    department: '',
    grade: '',
  };

  password = '';

  isVerifying = signal(false);
  isVerified = signal(false);
  verificationMsg = signal('');
  verificationError = signal(false);
  isRegistering = signal(false);

  verifyObs(): void {
    const validation = validateObsForm(
      this.studentData.firstName,
      this.studentData.studentNumber,
    );

    if (!validation.valid) {
      this.verificationMsg.set(validation.message);
      this.verificationError.set(true);
      return;
    }

    this.isVerifying.set(true);
    this.verificationMsg.set('');

    this.obsService.verifyStudent(this.studentData).subscribe((res) => {
      this.isVerifying.set(false);
      this.verificationError.set(!res.verified);
      this.verificationMsg.set(res.message);

      if (res.verified) {
        this.isVerified.set(true);
      }
    });
  }

  onSubmit(): void {
    if (!this.isVerified()) {
      this.verificationMsg.set('Öncelikle OBS doğrulaması yapmalısınız.');
      this.verificationError.set(true);
      return;
    }

    const passwordValidation = validateRegistrationPassword(this.password);
    if (!passwordValidation.valid) {
      this.verificationMsg.set(passwordValidation.message);
      this.verificationError.set(true);
      return;
    }

    this.isRegistering.set(true);

    setTimeout(() => {
      this.isRegistering.set(false);
      this.auth.login(this.studentData.studentNumber, this.password);
      this.router.navigate(['/dashboard']);
    }, 1000);
  }
}
