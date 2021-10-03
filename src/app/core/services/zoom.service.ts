import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ZoomService {
  // lazy programmers globals
  scale = 1;
  wx = 0; // world zoom origin
  wy = 0;
  sx = 0; // mouse screen pos
  sy = 0;

  zoomed(number: number) {
    // just scale
    return Math.floor(number * this.scale);
  }

  // converts from world coord to screen pixel coord
  zoomedX(number: number) {
    // scale & origin X
    return Math.floor((number - this.wx) * this.scale + this.sx);
  }

  zoomedY(number: number) {
    // scale & origin Y
    return Math.floor((number - this.wy) * this.scale + this.sy);
  }

  // Inverse does the reverse of a calculation. Like (3 - 1) * 5 = 10   the inverse is 10 * (1/5) + 1 = 3
  // multiply become 1 over ie *5 becomes * 1/5  (or just /5)
  // Adds become subtracts and subtract become add.
  // and what is first become last and the other way round.

  // inverse function converts from screen pixel coord to world coord
  zoomedX_INV(number: number) {
    // scale & origin INV
    return Math.floor((number - this.sx) * (1 / this.scale) + this.wx);
    // or return Math.floor((number - sx) / scale + wx);
  }

  zoomedY_INV(number: number) {
    // scale & origin INV
    return Math.floor((number - this.sy) * (1 / this.scale) + this.wy);
    // or return Math.floor((number - sy) / scale + wy);
  }
}
