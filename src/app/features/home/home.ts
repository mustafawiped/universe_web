import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ParticleCanvasComponent } from '../../shared/components/particle-canvas/particle-canvas';

/**
 * HomeComponent — UniVerse Landing Page.
 *
 * SRP: Orchestrates the public-facing marketing page layout.
 *      Canvas animation is delegated to ParticleCanvasComponent.
 *      Navigation is delegated to the Router.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ParticleCanvasComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  /** Platform statistics displayed in the hero section. */
  readonly stats = [
    { value: '12K+', label: 'Aktif Öğrenci' },
    { value: '850+', label: 'Akademisyen' },
    { value: '38', label: 'Bölüm' },
    { value: '99.9%', label: 'Uptime' },
  ] as const;

  /** Feature cards displayed in the features grid. */
  readonly features = [
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
      title: 'Akademik Paylaşım',
      desc: 'Ders notları, araştırma makaleleri ve akademik kaynakları kolayca paylaşın ve keşfedin.',
      color: '#d4af37',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: 'Sınıf İletişimi',
      desc: 'Sınıf arkadaşlarınız ve hocalarınızla anlık mesajlaşın, proje grupları kurun.',
      color: '#3b82f6',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      title: 'Duyurular & Etkinlikler',
      desc: 'Rektörlük duyurularını, etkinlikleri ve akademik takvimi tek noktadan takip edin.',
      color: '#8b5cf6',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: 'Anketler & Geri Bildirim',
      desc: 'Kurumsal anketlere katılın, üniversite yönetimine görüşlerinizi bildirin.',
      color: '#10b981',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
      title: 'OBS Entegrasyonu',
      desc: 'Üniversitenin OBS sistemi ile tam entegre; notlarınız, transkriptiniz anında erişilebilir.',
      color: '#f59e0b',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Rektörlük Destekli',
      desc: 'Resmi kurumsal altyapı ve rektörlük onaylı içerik yönetimi ile güvenli akademik ortam.',
      color: '#ef4444',
    },
  ] as const;

  /** Onboarding steps shown in the "How it works" section. */
  readonly steps = [
    { num: '01', title: 'OBS ile Kaydol', desc: 'Öğrenci numaranı ve bilgilerini OBS üzerinden teyit et.' },
    { num: '02', title: 'Profilini Tamamla', desc: 'Bölüm, sınıf ve ilgi alanlarını belirle.' },
    { num: '03', title: 'Platforma Katıl', desc: 'Sınıfın, hocaların ve akademik topluluğunla buluş.' },
  ] as const;

  private scrollObserver: IntersectionObserver | null = null;

  constructor(private readonly router: Router) {}

  ngAfterViewInit(): void {
    this.observeScrollReveal();
  }

  ngOnDestroy(): void {
    this.scrollObserver?.disconnect();
  }

  /** Navigate to an internal route. */
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  // ── Private ───────────────────────────────────────────────────

  private observeScrollReveal(): void {
    this.scrollObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        }),
      { threshold: 0.12 },
    );

    document.querySelectorAll('.reveal').forEach((el) => this.scrollObserver!.observe(el));
  }
}
