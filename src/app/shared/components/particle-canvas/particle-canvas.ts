import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { Particle } from './particle.model';

/**
 * Reusable particle-canvas background component.
 *
 * SRP: Solely responsible for the canvas particle animation lifecycle.
 * OCP: Behaviour is customisable via @Input() without modifying the class.
 *
 * Usage:
 *   <app-particle-canvas [particleCount]="80" [connectionDistance]="120" />
 */
@Component({
  selector: 'app-particle-canvas',
  standalone: true,
  templateUrl: './particle-canvas.html',
  styles: [
    `
      :host {
        display: block;
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 0;
        opacity: 0.7;
      }

      .particle-canvas {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class ParticleCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') private readonly canvasRef!: ElementRef<HTMLCanvasElement>;

  /** Number of particles to spawn. */
  @Input() particleCount = 80;

  /** Max pixel distance to draw a connection line between two particles. */
  @Input() connectionDistance = 120;

  /** Gold accent colour used for particles and connection lines. */
  @Input() particleColor = 'rgba(212, 175, 55, 1)';

  private animationFrameId = 0;
  private particles: Particle[] = [];
  private resizeHandler: (() => void) | null = null;

  ngAfterViewInit(): void {
    this.initCanvas();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  // ── Private ───────────────────────────────────────────────────

  private initCanvas(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.resizeHandler = () => this.handleResize(canvas);
    this.handleResize(canvas);
    window.addEventListener('resize', this.resizeHandler);

    this.animate(canvas, ctx);
  }

  private handleResize(canvas: HTMLCanvasElement): void {
    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement?.offsetHeight ?? window.innerHeight;
    this.particles = Array.from(
      { length: this.particleCount },
      () => new Particle(canvas.width, canvas.height),
    );
  }

  private animate(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.updateAndDrawParticles(canvas, ctx);
    this.drawConnections(ctx);

    this.animationFrameId = requestAnimationFrame(() => this.animate(canvas, ctx));
  }

  private updateAndDrawParticles(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ): void {
    for (const particle of this.particles) {
      particle.update(canvas.width, canvas.height);
      particle.draw(ctx, this.particleColor);
    }
  }

  private drawConnections(ctx: CanvasRenderingContext2D): void {
    const maxDist = this.connectionDistance;

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(212, 175, 55, ${0.08 * (1 - dist / maxDist)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(this.particles[i].x, this.particles[i].y);
          ctx.lineTo(this.particles[j].x, this.particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
}
