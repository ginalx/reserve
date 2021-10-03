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
  selector: '[app-user]',
  template: `
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
      User
    </button>
  `,
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
export class UserComponent {}
