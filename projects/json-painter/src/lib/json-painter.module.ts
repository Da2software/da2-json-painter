import { NgModule } from '@angular/core';
import { JsonPainterComponent } from './json-painter.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [JsonPainterComponent],
  imports: [CommonModule],
  exports: [JsonPainterComponent]
})
export class JsonPainterModule { }
