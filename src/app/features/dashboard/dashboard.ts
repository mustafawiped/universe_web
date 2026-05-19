import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterLinkActive } from '@angular/router';
import { AUTH_SERVICE } from '../../core/ports/auth.port';
import { DASHBOARD_SIDEBAR_ITEMS, DashboardSidebarItem } from './models/dashboard-card.model';

/**
 * DashboardComponent — Shell / Layout Container.
 *
 * SRP: Only manages the sidebar, topbar, and hosts the router-outlet.
 *      Each feature lives in its own child view component.
 *
 * OCP: Adding a new feature tab only requires:
 *      1. New sidebar item in dashboard-card.model.ts
 *      2. New view component in views/
 *      3. New route in dashboard.routes.ts
 *      This component remains unchanged.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardComponent {
  private readonly router = inject(Router);
  readonly auth = inject(AUTH_SERVICE);

  readonly sidebarItems: readonly DashboardSidebarItem[] = DASHBOARD_SIDEBAR_ITEMS;

  readonly greetingTime = computed(() => {
    const h = new Date().getHours();
    if (h < 12) return 'Günaydın';
    if (h < 18) return 'İyi günler';
    return 'İyi akşamlar';
  });

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
