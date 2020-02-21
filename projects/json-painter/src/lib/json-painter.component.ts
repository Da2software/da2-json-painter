import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'da2-json-painter',
  templateUrl: './json-painter.component.html',
  styles: []
})
export class JsonPainterComponent implements OnInit {
  @Input() dataJSON: any = [];
  @Input() _parentID: string = '';
  @Input() excludes: Array<string> = [];
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.isIterable(this.dataJSON)) {
      this.dataJSON = {};
    }
    // return the binding id 
    this._parentID = this._parentID || this._parentID.length > 0 ? this._parentID + '.' : '';
  }
  getKeys() {
    try {
      return Object.keys(this.dataJSON);
    } catch (error) {
      return [];
    }
  }
  isIterable(dataIterable): boolean {
    if (typeof dataIterable === ('object' || 'array')) {
      return true;
    } else {
      return false;
    }
  }
  getType(obj){
    return typeof obj;
  }
  isEmpty(obj) {
    try {
      for (const field of this.excludes) {
        delete obj[field];
      }
      if (Object.keys(obj).length > 0) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.warn(error);
      return true;
    }
  }
  _click(key) {
    this.onClick.emit(key);
  }
}
