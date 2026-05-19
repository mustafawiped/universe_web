/**
 * Particle entity — a single animated dot in the canvas system.
 *
 * Extracted from HomeComponent to honour the Single Responsibility
 * Principle: the component orchestrates the page, the Particle
 * class encapsulates its own physics & rendering.
 */
export class Particle {
  x: number;
  y: number;
  private vx: number;
  private vy: number;
  private readonly radius: number;
  private readonly opacity: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 2 + 0.5;
    this.opacity = Math.random() * 0.6 + 0.1;
  }

  /** Advance one frame — bounce off canvas edges. */
  update(canvasWidth: number, canvasHeight: number): void {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
  }

  /** Render the particle onto the given 2D context. */
  draw(ctx: CanvasRenderingContext2D, color: string): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.toRgba(color, this.opacity);
    ctx.fill();
  }

  // ── Private helpers ─────────────────────────────────────────

  /** Convert a hex/named color to an rgba string with the given alpha. */
  private toRgba(color: string, alpha: number): string {
    return `rgba(212, 175, 55, ${alpha})`;
  }
}
