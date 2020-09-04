import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  datetime: string;

  @Input() dtValue: string;
  @Output() dtValueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    moment.locale('pt-br');
    this.dtValue = moment(this.dtValue, 'DD-MM-yyyy hh:mm:ss').format('DD/MM/yyyy hh:mm:ss');
    console.log(this.dtValue);
  }

  logData() {
    console.log(moment(this.dtValue).format('L LTS').replace('/', '-').replace('/', '-'));
  }

}
