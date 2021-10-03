import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MouseService {
  mouse = {
    x: 0, // pixel pos of mouse
    y: 0,
    rx: 0, // mouse real (world) pos
    ry: 0,
    button: 0,
    bounds: new DOMRect(),
  };
}
