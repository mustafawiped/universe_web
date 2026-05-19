import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Announcement, AnnouncementSource, MOCK_ANNOUNCEMENTS } from '../../models/announcement.model';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements.html',
  styleUrl: './announcements.scss',
})
export class AnnouncementsComponent {
  readonly allAnnouncements = MOCK_ANNOUNCEMENTS;
  readonly activeFilter = signal<AnnouncementSource | 'all'>('all');

  get filteredAnnouncements(): readonly Announcement[] {
    const f = this.activeFilter();
    return f === 'all' ? this.allAnnouncements : this.allAnnouncements.filter(a => a.source === f);
  }

  setFilter(filter: AnnouncementSource | 'all'): void {
    this.activeFilter.set(filter);
  }

  getSourceLabel(source: string): string {
    const map: Record<string, string> = { rektorluk: 'Rektörlük', bolum: 'Bölüm', sinif: 'Sınıf' };
    return map[source] ?? source;
  }
}
