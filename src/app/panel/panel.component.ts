import { PanelService } from './../core/services/panel.service';
import { Component, HostBinding, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: '[app-panel]',
  templateUrl: './panel.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'translateX(0)' })),
      state('closed', style({ transform: 'translateX(-490px)' })),
      transition('open => closed', [animate('0.2s ease-out')]),
      transition('closed => open', [animate('0.2s ease-out')]),
    ]),
  ],
  styles: [
    `
      :host {
        z-index: 2;
        position: absolute;
        background: rgba(255, 255, 255, 0.9);
        height: 100%;
        width: 450px;
        padding: 20px;
        box-shadow: 0 0 20px -10px grey;
      }

      button {
        background-color: #9c27b0;
      }

      button:hover {
        filter: brightness(90%);
      }
    `,
  ],
})
export class PanelComponent implements OnInit {
  isOpen: boolean;

  @HostBinding('@openClose') get getOpenClose(): string {
    return this.isOpen ? 'open' : 'closed';
  }

  constructor(private readonly panelService: PanelService) {}

  ngOnInit(): void {
    this.panelService.isOpen.subscribe((res) => (this.isOpen = res));
  }
}
