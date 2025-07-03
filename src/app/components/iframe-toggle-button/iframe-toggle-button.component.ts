import { Component, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-iframe-toggle-button',
  imports: [IonicModule],
  templateUrl: './iframe-toggle-button.component.html',
  styleUrl: './iframe-toggle-button.component.scss'
})
export class IframeToggleTButtonComponent {
  @Output() toggle = new EventEmitter<void>();

  emitToggle() {
    this.toggle.emit();
  }
}
