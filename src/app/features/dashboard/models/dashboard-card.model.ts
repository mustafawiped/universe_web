/**
 * Dashboard sidebar navigation items.
 *
 * OCP: Adding a new feature = adding a new item here
 * + creating the corresponding view component + child route.
 */

export interface DashboardSidebarItem {
  readonly id: string;
  readonly icon: string;
  readonly label: string;
  readonly route: string;
  readonly badge: string | null;
}

export const DASHBOARD_SIDEBAR_ITEMS: readonly DashboardSidebarItem[] = [
  { id: 'overview',       icon: '🏠', label: 'Genel Bakış',       route: 'overview',       badge: null },
  { id: 'announcements',  icon: '📢', label: 'Duyurular',         route: 'announcements',  badge: '3 yeni' },
  { id: 'class-chat',     icon: '💬', label: 'Sınıf Sohbeti',     route: 'class-chat',     badge: null },
  { id: 'clubs',          icon: '🎭', label: 'Kulüpler',          route: 'clubs',          badge: '1 bekliyor' },
  { id: 'surveys',        icon: '📊', label: 'Anketler',          route: 'surveys',        badge: null },
  { id: 'schedule',       icon: '📅', label: 'Ders Programı',     route: 'schedule',       badge: null },
  { id: 'events',         icon: '🎉', label: 'Etkinlikler',       route: 'events',         badge: '2 yaklaşan' },
] as const;
