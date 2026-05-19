import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AUTH_SERVICE } from '../../../core/ports/auth.port';
import { validateLoginCredentials } from '../../../shared/utils/form-validators';

/**
 * LoginComponent — Authentication entry point.
 *
 * SRP: Handles only the login form UI and delegates:
 *   - Authentication logic → IAuthService (via DI token)
 *   - Validation logic → form-validators utility
 *   - Navigation → Angular Router
 *
 * DIP: Depends on AUTH_SERVICE token, not the concrete AuthService.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  private readonly auth = inject(AUTH_SERVICE);
  private readonly router = inject(Router);

  email = '';
  password = '';
  showPassword = false;
  isLoading = signal(false);
  errorMsg = signal('');
  activeTab: 'student' | 'staff' = 'student';

  constructor() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  setTab(tab: 'student' | 'staff'): void {
    this.activeTab = tab;
    this.errorMsg.set('');
    this.email = '';
    this.password = '';
  }

  onSubmit(): void {
    this.errorMsg.set('');

    const validation = validateLoginCredentials(this.email, this.password);
    if (!validation.valid) {
      this.errorMsg.set(validation.message);
      return;
    }

    this.isLoading.set(true);

    setTimeout(() => {
      const success = this.auth.login(this.email, this.password);
      this.isLoading.set(false);

      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMsg.set('Geçersiz bilgiler. Şifre en az 6 karakter olmalıdır.');
      }
    }, 900);
  }
}
