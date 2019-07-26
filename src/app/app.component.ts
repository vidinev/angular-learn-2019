import { Component } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';

import { AlertButtonComponent } from './alert-button/alert-button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  actionOptions: unknown;
  items$;

  constructor(updates: SwUpdate,
              public http: HttpClient,
              breakpointObserver: BreakpointObserver,
              mediaMatcher: MediaMatcher) {
    const mediaQueryList = mediaMatcher.matchMedia('(min-width: 960px) and (max-width: 1279.99px)');
    console.log(mediaQueryList);
    breakpointObserver.observe([
      Breakpoints.Large,
      Breakpoints.Medium
    ]).subscribe(result => {
      console.log(result);
    });

    updates.available.subscribe((event: UpdateAvailableEvent) => {
      if (prompt('ready for update')) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });

    this.items$ = this.http.get('https://jsonblob.com/api/jsonBlob/b896f6f8-a81d-11e9-8347-2331407d2c18')
      .pipe(
        map((res: { items: string[] }) => res.items)
      );
  }

  applyButton(text: string) {
    this.actionOptions = { component: AlertButtonComponent, data: { text } };
  }

  applyInput(text: string) {
    this.actionOptions = { component: InputTextComponent, data: { text } };
  }
}
