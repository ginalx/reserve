import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Table } from '../interfaces/table.interface';

@Injectable({ providedIn: 'root' })
export class PanelService {
  isOpen = new BehaviorSubject<boolean>(true);

  open(table: Table): void {
    this.isOpen.next(!this.isOpen.getValue());
  }
}
