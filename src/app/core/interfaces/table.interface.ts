export interface Table {
  type: 'Arc' | 'Rectangle';
  x: number;
  y: number;
}

export interface ArcTable extends Table {
  type: 'Arc';
  radius: number;
  startAngle?: number;
  endAngle?: number;
  counterclockwise?: boolean;
}

export interface RectagleTable extends Table {
  type: 'Rectangle';
  w: number;
  h: number;
}
