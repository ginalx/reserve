import { Injectable } from '@angular/core';
import { ArcTable, RectagleTable } from '../interfaces/table.interface';

@Injectable({ providedIn: 'root' })
export class TableService {
  tables: Array<ArcTable | RectagleTable> = [
    {
      type: 'Arc',
      x: 250,
      y: 500,
      radius: 50,
    },
    {
      type: 'Rectangle',
      x: 450,
      y: 450,
      w: 100,
      h: 100,
    },
    {
      type: 'Rectangle',
      x: 700,
      y: 450,
      w: 100,
      h: 100,
    },
    {
      type: 'Rectangle',
      x: 950,
      y: 450,
      w: 100,
      h: 100,
    },
    {
      type: 'Arc',
      x: 1250,
      y: 500,
      radius: 50,
    },
    {
      type: 'Arc',
      x: 1500,
      y: 500,
      radius: 50,
    },
  ];
}
