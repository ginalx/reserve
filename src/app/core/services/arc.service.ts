import { ArcTable } from './../interfaces/table.interface';
import { ZoomService } from './zoom.service';
import { CanvasService } from './canvas.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ArcService {
  constructor(
    private readonly canvasService: CanvasService,
    private readonly zoomService: ZoomService
  ) {}

  arc(table: ArcTable) {
    this.canvasService.context.moveTo(
      this.zoomService.zoomedX(table.x),
      this.zoomService.zoomedY(table.y)
    );
    this.canvasService.context.arc(
      this.zoomService.zoomedX(table.x),
      this.zoomService.zoomedY(table.y),
      this.zoomService.zoomed(table.radius),
      0,
      2 * Math.PI,
      false
    );
  }
}
