import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-block-button',
  templateUrl: './block-button.component.html',
  styleUrls: ['./block-button.component.scss'],
})
export class BlockButtonComponent {
  // property

  @Input() text: string | undefined; // Union Types Javada yok
  @Input() color: string = ''; // @Input decorator bunun bir attribute olduğunu anlar
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  // EventEmitter tipi ile event fırlatabiliriz. JAVA EventHandler olarak geçiyor.
  // <block-button color="red" text="btn1" (onClick)="click($event)"></block-button>
  // <block-button color="black" text="btn2"></block-button>

  // method
  click() {
    this.onClick.emit(); // event invoke işlemi, event çalıştırma yöntemi
  }
}
