import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Var
  // title = 'date-picker';
  // dtPicker = '03-09-2020 10:50:56';
  // value = 'tst';

  // Second Component Test
  dtValue = '03-09-2020 10:50:56';

  logValue() {
    console.log(this.dtValue);
  }
}
