/**
 * Domain model: University Events.
 */

export interface UniversityEvent {
  readonly id: string;
  readonly title: string;
  readonly desc: string;
  readonly date: string;
  readonly time: string;
  readonly location: string;
  readonly organizer: string;
  readonly category: 'akademik' | 'sosyal' | 'spor' | 'kariyer';
  readonly attendeeCount: number;
  readonly isOwner: boolean;
}

export const MOCK_EVENTS: readonly UniversityEvent[] = [
  { id: 'e1', title: 'Yapay Zeka Konferansı 2026', desc: 'Türkiye\'nin önde gelen AI araştırmacıları ile keynote sunumlar ve panel oturumları.', date: '2026-06-05', time: '09:00', location: 'Kongre Merkezi', organizer: 'Bilgisayar Müh. Bölümü', category: 'akademik', attendeeCount: 320, isOwner: false },
  { id: 'e2', title: 'Bahar Şenliği', desc: 'Konserler, yarışmalar, yiyecek stantları ve öğrenci aktiviteleri.', date: '2026-05-28', time: '14:00', location: 'Kampüs Yeşil Alan', organizer: 'Öğrenci Konseyi', category: 'sosyal', attendeeCount: 1500, isOwner: false },
  { id: 'e3', title: 'Kariyer Günleri', desc: 'Sektör temsilcileri ile CV workshop, mülakat simülasyonu ve staj fırsatları.', date: '2026-06-12', time: '10:00', location: 'İktisadi ve İdari Bilimler Fakültesi', organizer: 'Kariyer Merkezi', category: 'kariyer', attendeeCount: 450, isOwner: false },
  { id: 'e4', title: 'Fakülteler Arası Futbol Turnuvası', desc: '8 fakülteden 16 takımın katıldığı geleneksel bahar futbol turnuvası.', date: '2026-05-30', time: '16:00', location: 'Spor Sahası', organizer: 'Spor Kulübü', category: 'spor', attendeeCount: 200, isOwner: false },
  { id: 'e5', title: 'Coding Night — Hackathon', desc: '24 saatlik kodlama maratonu. Takımlar arası yarışma ve ödüller.', date: '2026-06-08', time: '18:00', location: 'Bilgisayar Lab D-301', organizer: 'Yazılım Kulübü', category: 'akademik', attendeeCount: 80, isOwner: true },
];
