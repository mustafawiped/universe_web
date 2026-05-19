/**
 * Domain model: Announcements.
 *
 * Supports three announcement sources as required:
 * - Rektörlük (rectorate)
 * - Bölüm Başkanlığı (department)
 * - Sınıf (class-specific)
 */

export type AnnouncementSource = 'rektorluk' | 'bolum' | 'sinif';

export interface Announcement {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly source: AnnouncementSource;
  readonly date: string;
  readonly priority: 'high' | 'normal' | 'low';
  readonly author: string;
}

export const MOCK_ANNOUNCEMENTS: readonly Announcement[] = [
  { id: 'a1', title: '2025-2026 Bahar Dönemi Final Takvimi', body: 'Final sınavları 9-20 Haziran tarihleri arasında gerçekleştirilecektir. Detaylı takvim OBS üzerinden yayınlanmıştır.', source: 'rektorluk', date: '2026-05-18', priority: 'high', author: 'Rektörlük' },
  { id: 'a2', title: 'Kütüphane Çalışma Saatleri Güncellendi', body: 'Final dönemi boyunca merkez kütüphane 07:00-24:00 saatleri arasında hizmet verecektir.', source: 'rektorluk', date: '2026-05-17', priority: 'normal', author: 'Rektörlük' },
  { id: 'a3', title: 'Yazılım Mühendisliği Proje Sunumları', body: 'Bitirme projesi sunumları 5-6 Haziran tarihlerinde D-201 salonunda yapılacaktır. Jüri listesi ekte yer almaktadır.', source: 'bolum', date: '2026-05-16', priority: 'high', author: 'Bilgisayar Müh. Bölüm Başkanlığı' },
  { id: 'a4', title: 'Staj Başvuru Son Tarihi', body: 'Yaz stajı başvuruları için son tarih 30 Mayıs 2026. Başvuru formunu bölüm sekreterliğine teslim ediniz.', source: 'bolum', date: '2026-05-15', priority: 'normal', author: 'Bilgisayar Müh. Bölüm Başkanlığı' },
  { id: 'a5', title: 'Veri Tabanı Ödevi Teslim Tarihi Uzatıldı', body: 'Veri Tabanı Yönetim Sistemleri dersi ödev teslim tarihi 25 Mayıs olarak güncellenmiştir.', source: 'sinif', date: '2026-05-14', priority: 'normal', author: 'Prof. Dr. Ahmet Yılmaz' },
  { id: 'a6', title: 'Yapay Zeka Lab Saati Değişikliği', body: 'Bu haftaki YZ lab saati Çarşamba 14:00 yerine Perşembe 10:00 olarak değiştirilmiştir.', source: 'sinif', date: '2026-05-13', priority: 'high', author: 'Doç. Dr. Elif Kaya' },
];
