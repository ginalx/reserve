import { BackgroundService } from './background.service';
import { ChairService } from './chair.service';
import { PanelService } from './panel.service';
import { Injectable } from '@angular/core';
import { CanvasService } from './canvas.service';
import { MouseService } from './mouse.service';
import { TableService } from './table.service';
import { RectangleService } from './rectangle.service';
import { ArcService } from './arc.service';
import { FloorService } from './floor.service';

@Injectable({ providedIn: 'root' })
export class DrawService {
  constructor(
    private readonly arcService: ArcService,
    private readonly canvasService: CanvasService,
    private readonly tableService: TableService,
    private readonly mouseService: MouseService,
    private readonly panelService: PanelService,
    private readonly rectangleService: RectangleService,
    private readonly chairService: ChairService,
    private readonly floorService: FloorService,
    private readonly backgroundService: BackgroundService
  ) {}

  // draw everything in pixels coords
  draw(event?: MouseEvent) {
    this.canvasService.context.clearRect(
      0,
      0,
      this.canvasService.canvas.width,
      this.canvasService.canvas.height
    );
    let wasInPathOnce = false;

    this.backgroundService.background();
    this.floorService.floor();

    this.tableService.tables.forEach((table) => {
      this.canvasService.context.beginPath();
      switch (table.type) {
        case 'Arc':
          this.arcService.arc(table);
          this.chairService.arcChair(table);
          break;
        case 'Rectangle':
          this.rectangleService.rectangle(table);
          this.chairService.rectChair(table);
          break;
      }

      const isInPath = this.canvasService.context.isPointInPath(
        this.mouseService.mouse.x,
        this.mouseService.mouse.y
      );
      if (isInPath) {
        wasInPathOnce = true;
        if (event?.type === 'mouseup') {
          this.panelService.isOpen.next(true);
        }
      }
      this.canvasService.context.fillStyle = isInPath ? '#F1F1F1' : 'white';
      this.canvasService.context.strokeStyle = 'black';
      this.canvasService.context.stroke();
      this.canvasService.context.fill();
    });
    if (wasInPathOnce) document.body.style.cursor = 'pointer';
    else document.body.style.cursor = 'default';
  }
}
