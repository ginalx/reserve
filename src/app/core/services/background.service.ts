import { CanvasService } from './canvas.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BackgroundService {
  constructor(private readonly canvasService: CanvasService) {}

  background() {
    this.canvasService.context.fillStyle = 'whitesmoke';
    this.canvasService.context.fillRect(
      0,
      0,
      this.canvasService.canvas.width,
      this.canvasService.canvas.height
    );
  }
}
