import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dtValue = '03-09-2020 10:50:56';

  logValue() {
    console.log(this.dtValue);
  }
}
