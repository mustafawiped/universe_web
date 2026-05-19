/**
 * Domain model: Weekly Schedule.
 */

export type Weekday = 'Pazartesi' | 'Salı' | 'Çarşamba' | 'Perşembe' | 'Cuma';

export interface ScheduleEntry {
  readonly id: string;
  readonly course: string;
  readonly courseCode: string;
  readonly instructor: string;
  readonly day: Weekday;
  readonly startTime: string;
  readonly endTime: string;
  readonly room: string;
  readonly color: string;
}

export const WEEKDAYS: readonly Weekday[] = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];

export const TIME_SLOTS: readonly string[] = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

export const MOCK_SCHEDULE: readonly ScheduleEntry[] = [
  { id: 'sc1', course: 'Veri Tabanı Yönetim Sistemleri', courseCode: 'BLM305', instructor: 'Prof. Dr. Ahmet Yılmaz', day: 'Pazartesi', startTime: '09:00', endTime: '11:00', room: 'D-201', color: '#3b82f6' },
  { id: 'sc2', course: 'Yapay Zeka', courseCode: 'BLM401', instructor: 'Doç. Dr. Elif Kaya', day: 'Pazartesi', startTime: '13:00', endTime: '15:00', room: 'D-301', color: '#8b5cf6' },
  { id: 'sc3', course: 'Yazılım Mühendisliği', courseCode: 'BLM307', instructor: 'Dr. Öğr. Üyesi Murat Demir', day: 'Salı', startTime: '10:00', endTime: '12:00', room: 'B-105', color: '#10b981' },
  { id: 'sc4', course: 'Bilgisayar Ağları', courseCode: 'BLM303', instructor: 'Prof. Dr. Hasan Çelik', day: 'Çarşamba', startTime: '09:00', endTime: '11:00', room: 'D-202', color: '#f59e0b' },
  { id: 'sc5', course: 'İşletim Sistemleri', courseCode: 'BLM301', instructor: 'Doç. Dr. Zeynep Ak', day: 'Çarşamba', startTime: '14:00', endTime: '16:00', room: 'D-301', color: '#ef4444' },
  { id: 'sc6', course: 'Yapay Zeka Lab', courseCode: 'BLM401L', instructor: 'Doç. Dr. Elif Kaya', day: 'Perşembe', startTime: '10:00', endTime: '12:00', room: 'Lab-3', color: '#8b5cf6' },
  { id: 'sc7', course: 'İngilizce IV', courseCode: 'YDL204', instructor: 'Öğr. Gör. Sarah Johnson', day: 'Cuma', startTime: '09:00', endTime: '11:00', room: 'A-401', color: '#d4af37' },
  { id: 'sc8', course: 'Teknik Seçmeli: Siber Güvenlik', courseCode: 'BLM409', instructor: 'Dr. Öğr. Üyesi Can Aydın', day: 'Cuma', startTime: '13:00', endTime: '15:00', room: 'D-203', color: '#06b6d4' },
];
