/**
 * Domain model: Class Chat Messages.
 *
 * Port-ready: The chat will be backed by an Express.js API
 * with WebSocket support in the future. Current implementation
 * uses mock data for UI demonstration.
 */

export interface ChatMessage {
  readonly id: string;
  readonly sender: string;
  readonly senderAvatar: string;
  readonly content: string;
  readonly timestamp: string;
  readonly isOwn: boolean;
}

export const MOCK_CHAT_MESSAGES: readonly ChatMessage[] = [
  { id: 'm1', sender: 'Elif Yıldırım', senderAvatar: 'EY', content: 'Yarınki proje sunumuna hazır mısınız?', timestamp: '14:32', isOwn: false },
  { id: 'm2', sender: 'Ben', senderAvatar: 'BN', content: 'Evet, slaytları son haline getirdim. Drive\'a yükledim.', timestamp: '14:35', isOwn: true },
  { id: 'm3', sender: 'Ahmet Kara', senderAvatar: 'AK', content: 'Demo videosunu da ekledim. Link chat grubunda.', timestamp: '14:38', isOwn: false },
  { id: 'm4', sender: 'Zeynep Aydın', senderAvatar: 'ZA', content: 'Hocam da onayladı, 10:00\'da D-201\'de buluşalım.', timestamp: '14:42', isOwn: false },
  { id: 'm5', sender: 'Mert Çelik', senderAvatar: 'MÇ', content: 'Tamam, ben de UML diyagramlarını güncelliyorum şu an.', timestamp: '14:45', isOwn: false },
  { id: 'm6', sender: 'Ben', senderAvatar: 'BN', content: 'Harika, herkes hazır görünüyor 💪', timestamp: '14:48', isOwn: true },
  { id: 'm7', sender: 'Elif Yıldırım', senderAvatar: 'EY', content: 'Son bir şey — test sonuçlarını da rapor\'a ekleyelim mi?', timestamp: '15:01', isOwn: false },
  { id: 'm8', sender: 'Ben', senderAvatar: 'BN', content: 'Kesinlikle, coverage raporu %87 çıktı gayet iyi.', timestamp: '15:04', isOwn: true },
];
