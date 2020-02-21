import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {JsonPainterModule} from 'json-painter'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonPainterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
