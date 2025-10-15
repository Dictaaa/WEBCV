import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-matrix-bg',
  standalone: true,
  template: `<canvas></canvas>`,
  styles: [`
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: -1;
    }
  `]
})
export class MatrixBackgroundComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    if (typeof window === 'undefined') return; // 🚫 No ejecutar en SSR
    const canvas = this.el.nativeElement.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01010101010101';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff002d';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(draw, 33);
  }
}
