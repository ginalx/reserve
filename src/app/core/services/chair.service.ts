import { ArcService } from './arc.service';
import { RectangleService } from './rectangle.service';
import { Injectable } from '@angular/core';
import { ArcTable, RectagleTable } from '../interfaces/table.interface';

@Injectable({ providedIn: 'root' })
export class ChairService {
  constructor(
    private readonly rectangleService: RectangleService,
    private arcService: ArcService
  ) {}

  rectChair(table: RectagleTable) {
    const chairRadius = { tl: 10, tr: 10, br: 10, bl: 10 };
    const chairs = [
      { x: table.x + 35, y: table.y - 35 },
      { x: table.x + 105, y: table.y + 35 },
      { x: table.x + 35, y: table.y + 105 },
      { x: table.x - 35, y: table.y + 35 },
    ];
    chairs.forEach((chair) =>
      this.rectangleService.rectangle(
        {
          type: 'Rectangle',
          x: chair.x,
          y: chair.y,
          w: 30,
          h: 30,
        },
        chairRadius
      )
    );
  }

  arcChair(table: ArcTable) {
    const chairs = [
      { x: table.x + 50, y: table.y - 50 },
      { x: table.x + 50, y: table.y + 50 },
      { x: table.x - 50, y: table.y - 50 },
      { x: table.x - 50, y: table.y + 50 },
    ];
    chairs.forEach((chair) =>
      this.arcService.arc({
        type: 'Arc',
        x: chair.x,
        y: chair.y,
        radius: 15,
      })
    );
  }
}
