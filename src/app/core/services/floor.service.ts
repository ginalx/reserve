import { MouseService } from './mouse.service';
import { ZoomService } from './zoom.service';
import { CanvasService } from './canvas.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FloorService {
  image: HTMLImageElement;

  constructor(
    private readonly canvasService: CanvasService,
    private readonly zoomService: ZoomService,
    private readonly mouseService: MouseService
  ) {}

  floor() {
    const ctx = this.canvasService.context;
    const x = 100;
    const y = 400;
    const w = 2350;

    let column = 1;
    let filled = false;

    ctx.beginPath();
    while (!filled) {
      if (x + column * 16 > w) {
        filled = true;
      }
      ctx.rect(
        this.zoomService.zoomedX(x + column * 11),
        this.zoomService.zoomedY(y),
        this.zoomService.zoomed(10),
        this.zoomService.zoomed(200)
      );
      column++;
    }
    ctx.lineWidth = 1;
    ctx.fillStyle = 'whitesmoke';
    ctx.strokeStyle = 'rgb(30, 30, 30, .3)';
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    for (let i = 0; i < 50; i++) {
      this.rock(150 + i * 30, 380, 0.3);
    }
    for (let i = 0; i < 50; i++) {
      this.rock(150 + i * 30, 605, 0.3);
    }

    ctx.strokeStyle = 'rgb(30, 30, 30, .3)';
    ctx.stroke();
    ctx.closePath();

    // ctx.drawImage(this.image, rockX, rockY, zoomX, zoomY);
    // const isInPath = ctx.isPointInPath(
    //   this.mouseService.mouse.x,
    //   this.mouseService.mouse.y
    // );
    // if (isInPath) {
    //   console.log('asd');
    // }
  }

  rock(posX: number, posY: number, scale = 1) {
    const ctx = this.canvasService.context;
    const zoomedX = (x: number) => this.zoomService.zoomedX(x);
    const zoomedY = (y: number) => this.zoomService.zoomedY(y);
    const zoomed = (z: number) => this.zoomService.zoomed(z);
    const rockX = zoomedX(posX);
    const rockY = zoomedY(posY);

    ctx.moveTo(rockX, rockY);
    ctx.quadraticCurveTo(
      rockX + zoomed(scale * 25),
      rockY - zoomed(scale * 2),
      rockX + zoomed(scale * 60),
      rockY + zoomed(scale * 20)
    );
    ctx.quadraticCurveTo(
      rockX + zoomed(scale * 63),
      rockY + zoomed(scale * 35),
      rockX + zoomed(scale * 61),
      rockY + zoomed(scale * 45)
    );
    ctx.quadraticCurveTo(
      rockX + zoomed(scale * 45),
      rockY + zoomed(scale * 50),
      rockX + zoomed(scale * 35),
      rockY + zoomed(scale * 55)
    );
    ctx.quadraticCurveTo(
      rockX,
      rockY + zoomed(scale * 60),
      rockX - zoomed(scale * 25),
      rockY + zoomed(scale * 55)
    );
    ctx.quadraticCurveTo(
      rockX - zoomed(scale * 30),
      rockY + zoomed(scale * 40),
      rockX - zoomed(scale * 30),
      rockY + zoomed(scale * 35)
    );
    ctx.quadraticCurveTo(
      rockX - zoomed(scale * 15),
      rockY + zoomed(scale * 10),
      rockX,
      rockY
    );
  }
}
