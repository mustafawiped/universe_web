import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Club, ClubMembershipStatus, MOCK_CLUBS } from '../../models/club.model';

@Component({
  selector: 'app-clubs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clubs.html',
  styleUrl: './clubs.scss',
})
export class ClubsComponent {
  readonly clubs = signal<Club[]>([...MOCK_CLUBS]);
  readonly activeFilter = signal<'all' | 'member' | 'pending'>('all');

  get filteredClubs(): Club[] {
    const f = this.activeFilter();
    const all = this.clubs();
    if (f === 'all') return all;
    return all.filter(c => c.status === f);
  }

  setFilter(filter: 'all' | 'member' | 'pending'): void {
    this.activeFilter.set(filter);
  }

  applyToClub(clubId: string): void {
    this.clubs.update(clubs => clubs.map(c =>
      c.id === clubId ? { ...c, status: 'pending' as ClubMembershipStatus } : c
    ));
  }

  requestLeave(clubId: string): void {
    this.clubs.update(clubs => clubs.map(c =>
      c.id === clubId ? { ...c, status: 'none' as ClubMembershipStatus, memberCount: c.memberCount - 1 } : c
    ));
  }

  getStatusLabel(status: ClubMembershipStatus): string {
    const map: Record<ClubMembershipStatus, string> = { member: 'Üye', pending: 'Başvuru Bekliyor', none: '' };
    return map[status];
  }
}
