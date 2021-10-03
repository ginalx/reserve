import { Injectable } from '@angular/core';
import { CanvasService } from './canvas.service';
import { DrawService } from './draw.service';
import { MouseService } from './mouse.service';
import { ZoomService } from './zoom.service';

@Injectable({ providedIn: 'root' })
export class MoveService {
  constructor(
    private readonly mouseService: MouseService,
    private readonly zoomService: ZoomService,
    private readonly drawService: DrawService,
    private readonly canvasService: CanvasService
  ) {}

  mousemove(event: MouseEvent) {
    // mouse move event
    if (event.type === 'mousedown') {
      this.mouseService.mouse.button = 1;
    } else if (event.type === 'mouseup' || event.type === 'mouseout') {
      this.mouseService.mouse.button = 0;
    }

    this.mouseService.mouse.bounds =
      this.canvasService.canvas.getBoundingClientRect();
    this.mouseService.mouse.x =
      event.clientX - this.mouseService.mouse.bounds.left;
    this.mouseService.mouse.y =
      event.clientY - this.mouseService.mouse.bounds.top;
    var xx = this.mouseService.mouse.rx; // get last real world pos of mouse
    var yy = this.mouseService.mouse.ry;

    this.mouseService.mouse.rx = this.zoomService.zoomedX_INV(
      this.mouseService.mouse.x
    ); // get the mouse real world pos via inverse scale and translate
    this.mouseService.mouse.ry = this.zoomService.zoomedY_INV(
      this.mouseService.mouse.y
    );
    if (this.mouseService.mouse.button === 1) {
      // is mouse button down
      this.zoomService.wx -= this.mouseService.mouse.rx - xx; // move the world origin by the distance
      // moved in world coords
      this.zoomService.wy -= this.mouseService.mouse.ry - yy;
      // recaculate mouse world
      this.mouseService.mouse.rx = this.zoomService.zoomedX_INV(
        this.mouseService.mouse.x
      );
      this.mouseService.mouse.ry = this.zoomService.zoomedY_INV(
        this.mouseService.mouse.y
      );
    }
    this.drawService.draw(event);
  }
}
