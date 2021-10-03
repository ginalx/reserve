import { DrawService } from './../core/services/draw.service';
import { Component, OnInit } from '@angular/core';
import { CanvasService } from '../core/services/canvas.service';
import { MoveService } from '../core/services/move.service';
import { WheelService } from '../core/services/wheel.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
})
export class TargetComponent implements OnInit {
  constructor(
    readonly wheelService: WheelService,
    readonly moveService: MoveService,
    private readonly canvasService: CanvasService,
    private readonly drawService: DrawService
  ) {}

  ngOnInit(): void {
    this.canvasService.init(
      document.getElementById('canvas') as HTMLCanvasElement
    );

    this.drawService.draw();

    // var img = new Image();
    // img.src = 'assets/img/rock.png';
    // img.onload = () => {
    //   this.floorService.image = img;
    //   this.drawService.draw();
    // };
  }
}
