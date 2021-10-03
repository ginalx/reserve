import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CanvasService {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  init(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}
