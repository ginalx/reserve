import { Injectable } from '@angular/core';
import { DrawService } from './draw.service';
import { MouseService } from './mouse.service';
import { ZoomService } from './zoom.service';

@Injectable({ providedIn: 'root' })
export class WheelService {
  constructor(
    private readonly zoomService: ZoomService,
    private readonly mouseService: MouseService,
    private readonly drawService: DrawService
  ) {}

  mousewheel(event: Event) {
    const wheelEvent = event as WheelEvent;
    if (wheelEvent.deltaY < 0) {
      this.zoomService.scale = Math.min(5, this.zoomService.scale * 1.1); // zoom in
    } else {
      this.zoomService.scale = Math.max(
        0.1,
        this.zoomService.scale * (1 / 1.1)
      ); // zoom out is inverse of zoom in
    }
    this.zoomService.wx = this.mouseService.mouse.rx; // set world origin
    this.zoomService.wy = this.mouseService.mouse.ry;
    this.zoomService.sx = this.mouseService.mouse.x; // set screen origin
    this.zoomService.sy = this.mouseService.mouse.y;
    this.mouseService.mouse.rx = this.zoomService.zoomedX_INV(
      this.mouseService.mouse.x
    ); // recalc mouse world (real) pos
    this.mouseService.mouse.ry = this.zoomService.zoomedY_INV(
      this.mouseService.mouse.y
    );

    this.drawService.draw(wheelEvent);
    event.preventDefault(); // stop the page scrolling
  }
}
