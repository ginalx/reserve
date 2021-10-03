import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { PanelService } from '../core/services/panel.service';

@Component({
  selector: '[app-watermark]',
  template: `Réserve`,
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'translateX(225px)' })),
      state('closed', style({ transform: 'translateX(0)' })),
      transition('open => closed', [animate('0.2s ease-out')]),
      transition('closed => open', [animate('0.2s ease-out')]),
    ]),
  ],
  styles: [
    `
      :host {
        position: absolute;
        z-index: 1;
        bottom: 19px;
        left: 50%;
        margin-left: -33px;
        color: #9c27b0;
        font-size: 22px;
        pointer-events: none;
      }
    `,
  ],
})
export class WatermarkComponent implements OnInit {
  private isOpen: boolean;

  @HostBinding('@openClose') get getOpenClose(): string {
    return this.isOpen ? 'open' : 'closed';
  }

  constructor(private readonly panelService: PanelService) {}

  ngOnInit(): void {
    this.panelService.isOpen.subscribe((isOpen) => (this.isOpen = isOpen));
  }
}
