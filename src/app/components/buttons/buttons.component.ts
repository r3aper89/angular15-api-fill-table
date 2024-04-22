import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  @Output() clearTableEvent = new EventEmitter<void>();

  clearTable() {
    this.clearTableEvent.emit();
  }

}
