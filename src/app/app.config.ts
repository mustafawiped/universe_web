import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AUTH_SERVICE } from './core/ports/auth.port';
import { AuthService } from './core/services/auth.service';
import { OBS_VERIFICATION_SERVICE } from './core/ports/obs-verification.port';
import { ObsVerificationService } from './core/services/obs-verification.service';

/**
 * Root application configuration.
 *
 * DIP: Concrete service implementations are bound to their
 * abstract InjectionTokens here — the single composition root.
 * Swapping implementations (e.g. mock → HTTP) only requires
 * changing this file.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    // ── DIP bindings ──────────────────────────────────────────
    { provide: AUTH_SERVICE, useExisting: AuthService },
    { provide: OBS_VERIFICATION_SERVICE, useExisting: ObsVerificationService },
  ],
};
