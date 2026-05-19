import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniversityEvent, MOCK_EVENTS } from '../../models/event.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class EventsComponent {
  readonly events = signal<UniversityEvent[]>([...MOCK_EVENTS]);
  readonly showCreateForm = signal(false);
  readonly activeFilter = signal<'all' | 'akademik' | 'sosyal' | 'spor' | 'kariyer'>('all');

  newEvent = { title: '', desc: '', date: '', time: '', location: '', category: 'sosyal' as const };

  get filteredEvents(): UniversityEvent[] {
    const f = this.activeFilter();
    const all = this.events();
    return f === 'all' ? all : all.filter(e => e.category === f);
  }

  setFilter(filter: 'all' | 'akademik' | 'sosyal' | 'spor' | 'kariyer'): void {
    this.activeFilter.set(filter);
  }

  toggleCreateForm(): void {
    this.showCreateForm.update(v => !v);
  }

  createEvent(): void {
    if (!this.newEvent.title || !this.newEvent.date) return;

    const event: UniversityEvent = {
      id: 'e' + Date.now(),
      title: this.newEvent.title,
      desc: this.newEvent.desc,
      date: this.newEvent.date,
      time: this.newEvent.time || '10:00',
      location: this.newEvent.location || 'Kampüs',
      organizer: 'Ben',
      category: this.newEvent.category,
      attendeeCount: 0,
      isOwner: true,
    };

    this.events.update(list => [event, ...list]);
    this.newEvent = { title: '', desc: '', date: '', time: '', location: '', category: 'sosyal' };
    this.showCreateForm.set(false);
  }

  getCategoryLabel(category: string): string {
    const map: Record<string, string> = { akademik: 'Akademik', sosyal: 'Sosyal', spor: 'Spor', kariyer: 'Kariyer' };
    return map[category] ?? category;
  }

  getCategoryColor(category: string): string {
    const map: Record<string, string> = { akademik: '#8b5cf6', sosyal: '#f59e0b', spor: '#3b82f6', kariyer: '#10b981' };
    return map[category] ?? '#d4af37';
  }
}
