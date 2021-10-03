import { ChairService } from './chair.service';
import { ZoomService } from './zoom.service';
import { CanvasService } from './canvas.service';
import { Injectable } from '@angular/core';
import { RectagleTable } from '../interfaces/table.interface';

@Injectable({ providedIn: 'root' })
export class RectangleService {
  constructor(
    private readonly canvasService: CanvasService,
    private readonly zoomService: ZoomService
  ) {}

  rectangle(
    table: RectagleTable,
    radius: { tl: number; tr: number; br: number; bl: number } = {
      tl: 25,
      tr: 25,
      br: 25,
      bl: 25,
    }
  ) {
    const ctx = this.canvasService.context;
    const x = this.zoomService.zoomedX(table.x);
    const y = this.zoomService.zoomedY(table.y);
    const w = this.zoomService.zoomed(table.w);
    const h = this.zoomService.zoomed(table.h);
    const tl = this.zoomService.zoomed(radius.tl);
    const tr = this.zoomService.zoomed(radius.tr);
    const br = this.zoomService.zoomed(radius.br);
    const bl = this.zoomService.zoomed(radius.bl);

    ctx.moveTo(x + tl, y);
    ctx.lineTo(x + w - tr, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + tr);
    ctx.lineTo(x + w, y + h - br);
    ctx.quadraticCurveTo(x + w, y + h, x + w - br, y + h);
    ctx.lineTo(x + bl, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - bl);
    ctx.lineTo(x, y + tl);
    ctx.quadraticCurveTo(x, y, x + tl, y);
  }
}
