import { Routes } from '@angular/router';

/**
 * Dashboard child routes.
 *
 * OCP: Adding a new dashboard feature = add entry here + create component.
 * All views are lazy-loaded for optimal bundle splitting.
 */
export const dashboardRoutes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    loadComponent: () => import('./views/overview/overview').then(m => m.OverviewComponent),
  },
  {
    path: 'announcements',
    loadComponent: () => import('./views/announcements/announcements').then(m => m.AnnouncementsComponent),
  },
  {
    path: 'class-chat',
    loadComponent: () => import('./views/class-chat/class-chat').then(m => m.ClassChatComponent),
  },
  {
    path: 'clubs',
    loadComponent: () => import('./views/clubs/clubs').then(m => m.ClubsComponent),
  },
  {
    path: 'surveys',
    loadComponent: () => import('./views/surveys/surveys').then(m => m.SurveysComponent),
  },
  {
    path: 'schedule',
    loadComponent: () => import('./views/schedule/schedule').then(m => m.ScheduleComponent),
  },
  {
    path: 'events',
    loadComponent: () => import('./views/events/events').then(m => m.EventsComponent),
  },
];
