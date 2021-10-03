import { PanelService } from './../core/services/panel.service';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: '[app-panel-toggle]',
  template: `{{ isOpen ? '&#8249;' : '&#8250;' }}`,
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'translateX(490px)' })),
      state('closed', style({ transform: 'translateX(0)' })),
      transition('open => closed', [animate('0.2s ease-out')]),
      transition('closed => open', [animate('0.2s ease-out')]),
    ]),
  ],
  styles: [
    `
      :host {
        z-index: 1;
        position: absolute;
        font-size: 35px;
        background: white;
        border-radius: 0 5px 5px 0;
        top: calc(50% - 30px);
        box-shadow: 0px 1px 4px rgb(0 0 0 / 30%);
        cursor: pointer;
      }

      div {
        transform-origin: center;
      }
    `,
  ],
})
export class PanelToggleComponent implements OnInit {
  isOpen: boolean;

  @HostBinding('@openClose') get getOpenClose(): string {
    return this.isOpen ? 'open' : 'closed';
  }
  @HostBinding('style.padding') get overflowY(): string {
    return this.isOpen ? '20px 15px 30px 12px' : '20px 12px 30px 15px';
  }
  @HostListener('click', ['$event.target'])
  onClick() {
    this.panelService.isOpen.next(!this.panelService.isOpen.getValue());
  }

  constructor(private readonly panelService: PanelService) {}

  ngOnInit(): void {
    this.panelService.isOpen.subscribe((res) => (this.isOpen = res));
  }
}
