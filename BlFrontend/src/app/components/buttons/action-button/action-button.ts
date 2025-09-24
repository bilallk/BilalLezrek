import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-action-button',
  imports: [MatButtonModule],
  templateUrl: './action-button.html',
  styleUrl: './action-button.scss'
})
export class ActionButton {
  @Input() label!: string;
  @Input() color: string = "blue";
  @Input() disabled = false;
  @Output() action = new EventEmitter<void>();

  onClick() {
    this.action.emit();
  }

}
