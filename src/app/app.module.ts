import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertButtonComponent,
    InputTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    AlertButtonComponent,
    InputTextComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
