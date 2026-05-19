/**
 * Domain model: Surveys.
 */

export interface SurveyOption {
  readonly label: string;
  readonly votes: number;
}

export interface Survey {
  readonly id: string;
  readonly title: string;
  readonly desc: string;
  readonly deadline: string;
  readonly isCompleted: boolean;
  readonly totalResponses: number;
  readonly options: readonly SurveyOption[];
}

export const MOCK_SURVEYS: readonly Survey[] = [
  { id: 's1', title: 'Kampüs Memnuniyeti Anketi 2026', desc: 'Üniversite kampüsündeki hizmetler, altyapı ve sosyal alanlar hakkındaki görüşlerinizi paylaşın.', deadline: '2026-06-01', isCompleted: false, totalResponses: 847, options: [{ label: 'Çok Memnunum', votes: 312 }, { label: 'Memnunum', votes: 298 }, { label: 'Kararsızım', votes: 127 }, { label: 'Memnun Değilim', votes: 110 }] },
  { id: 's2', title: 'Yemek Hizmetleri Değerlendirmesi', desc: 'Yemekhane menüsü, hijyen ve fiyatlandırma hakkında geri bildiriminiz.', deadline: '2026-05-25', isCompleted: true, totalResponses: 1203, options: [{ label: 'İyi', votes: 421 }, { label: 'Orta', votes: 502 }, { label: 'Kötü', votes: 280 }] },
  { id: 's3', title: 'Uzaktan Eğitim Tercihi', desc: 'Gelecek dönem için hibrit eğitim modeli hakkında görüşlerinizi bildirin.', deadline: '2026-06-10', isCompleted: false, totalResponses: 562, options: [{ label: 'Tamamen Yüz Yüze', votes: 201 }, { label: 'Hibrit', votes: 248 }, { label: 'Tamamen Uzaktan', votes: 113 }] },
];
