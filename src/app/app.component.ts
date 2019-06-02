import { Component } from '@angular/core';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { InputTextComponent } from './input-text/input-text.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  actionOptions: unknown;

  applyButton(text: string) {
    this.actionOptions = { component: AlertButtonComponent, data: { text } };
  }

  applyInput(text: string) {
    this.actionOptions = { component: InputTextComponent, data: { text } };
  }
}
