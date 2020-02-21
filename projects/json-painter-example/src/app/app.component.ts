import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data1 = { a: [{ title: 'my name', ids: 1 }], b: { ad: '', omg: [{ a: 1 }, { b: true }] } };
  _myClcik(ev) {
    console.log(ev);
  }
}
