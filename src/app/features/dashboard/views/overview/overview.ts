import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AUTH_SERVICE } from '../../../../core/ports/auth.port';
import { MOCK_ANNOUNCEMENTS } from '../../models/announcement.model';
import { MOCK_EVENTS } from '../../models/event.model';
import { MOCK_SURVEYS } from '../../models/survey.model';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class OverviewComponent {
  readonly auth = inject(AUTH_SERVICE);

  readonly stats = [
    { icon: '📢', label: 'Yeni Duyuru', value: MOCK_ANNOUNCEMENTS.filter(a => a.priority === 'high').length.toString(), color: '#d4af37' },
    { icon: '📊', label: 'Bekleyen Anket', value: MOCK_SURVEYS.filter(s => !s.isCompleted).length.toString(), color: '#3b82f6' },
    { icon: '🎉', label: 'Yaklaşan Etkinlik', value: MOCK_EVENTS.length.toString(), color: '#10b981' },
    { icon: '📅', label: 'Bugünkü Ders', value: '3', color: '#8b5cf6' },
  ];

  readonly recentAnnouncements = MOCK_ANNOUNCEMENTS.slice(0, 3);
  readonly upcomingEvents = MOCK_EVENTS.slice(0, 3);

  readonly greetingTime = computed(() => {
    const h = new Date().getHours();
    if (h < 12) return 'Günaydın';
    if (h < 18) return 'İyi günler';
    return 'İyi akşamlar';
  });

  getSourceLabel(source: string): string {
    const map: Record<string, string> = { rektorluk: 'Rektörlük', bolum: 'Bölüm', sinif: 'Sınıf' };
    return map[source] ?? source;
  }
}
