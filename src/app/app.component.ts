import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dtValue: string;

  getValue(dateTime) {
    this.dtValue = dateTime;
  }
}
