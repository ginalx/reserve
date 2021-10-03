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
  selector: '[app-fast-select]',
  template: `
    ark <br />
    Friday 10/2/21 - 9:00 PM<br />
    Select a table from the map or <br />
    <button
      type="button"
      style="
      border: none;
      color: whitesmoke;
      margin: 0 auto;
      padding: 5px 10px 10px;
      font-size: 24px;
      border-radius: 5px;
      font-family: inherit;
      cursor: pointer;"
    >
      Select random table
    </button>
  `,
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
        top: 19px;
        left: 50%;
        margin-left: -150px;
        color: #9c27b0;
        font-size: 22px;
        text-align: center;
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
export class FastSelectComponent implements OnInit {
  private isOpen: boolean;

  @HostBinding('@openClose') get getOpenClose(): string {
    return this.isOpen ? 'open' : 'closed';
  }

  constructor(private readonly panelService: PanelService) {}

  ngOnInit(): void {
    this.panelService.isOpen.subscribe((isOpen) => (this.isOpen = isOpen));
  }
}
