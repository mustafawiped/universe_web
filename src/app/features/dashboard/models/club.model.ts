/**
 * Domain model: Student Clubs.
 */

export type ClubMembershipStatus = 'member' | 'pending' | 'none';

export interface Club {
  readonly id: string;
  readonly name: string;
  readonly desc: string;
  readonly memberCount: number;
  readonly category: string;
  readonly status: ClubMembershipStatus;
}

export const MOCK_CLUBS: readonly Club[] = [
  { id: 'c1', name: 'Yazılım Geliştirme Kulübü', desc: 'Hackathon, workshop ve açık kaynak projeler ile yazılım becerilerini geliştirme.', memberCount: 124, category: 'Teknoloji', status: 'member' },
  { id: 'c2', name: 'Yapay Zeka ve Veri Bilimi', desc: 'ML/DL projeleri, Kaggle yarışmaları ve akademik makale okumaları.', memberCount: 87, category: 'Teknoloji', status: 'member' },
  { id: 'c3', name: 'Girişimcilik Kulübü', desc: 'Startup mentörlüğü, pitch etkinlikleri ve iş geliştirme atölyeleri.', memberCount: 156, category: 'İş Dünyası', status: 'pending' },
  { id: 'c4', name: 'Fotoğrafçılık Kulübü', desc: 'Kampüs fotoğraf gezileri, sergi organizasyonu ve teknik eğitimler.', memberCount: 63, category: 'Sanat', status: 'none' },
  { id: 'c5', name: 'Münazara Kulübü', desc: 'Turnuva hazırlıkları, argüman geliştirme ve hitabet eğitimleri.', memberCount: 45, category: 'Akademik', status: 'none' },
  { id: 'c6', name: 'Robotik ve Otomasyon', desc: 'Arduino, ROS ve endüstriyel otomasyon projeleri.', memberCount: 92, category: 'Teknoloji', status: 'none' },
];
