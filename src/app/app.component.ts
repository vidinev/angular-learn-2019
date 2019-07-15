import { Component } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';


import { AlertButtonComponent } from './alert-button/alert-button.component';
import { InputTextComponent } from './input-text/input-text.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  actionOptions: unknown;

  constructor(updates: SwUpdate) {
    updates.available.subscribe((event: UpdateAvailableEvent) => {
      console.log(event);
      if (prompt('ready for update')) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  applyButton(text: string) {
    this.actionOptions = { component: AlertButtonComponent, data: { text } };
  }

  applyInput(text: string) {
    this.actionOptions = { component: InputTextComponent, data: { text } };
  }
}
