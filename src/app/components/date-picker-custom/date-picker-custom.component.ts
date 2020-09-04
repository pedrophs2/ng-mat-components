import { DateAdapter } from '@angular/material/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker-custom',
  templateUrl: './date-picker-custom.component.html',
  styleUrls: ['./date-picker-custom.component.scss']
})
export class DatePickerCustomComponent implements OnInit {

  float = 'always';

  dateValue: string;
  timeValue: string;

  @Input() dtValue: string;

  @Output() outDate = new EventEmitter<string>();
  @Output() outTime = new EventEmitter<string>();
  @Output() outDT = new EventEmitter<string>();

  dateConv: any;

  date: any;
  time: any;

  constructor(private adapter: DateAdapter<any>) { }

  ngOnInit(): void {
    this.adapter.setLocale('pt-br');

    this.dataSplit();

    this.dateConv = moment(this.dateValue, 'DD-MM-YYYY').format('yyyy/MM/DD');
    this.date = new FormControl(new Date(this.dateConv));

    this.time = new FormControl(this.timeValue);
  }

  dataSplit() {
    this.dateValue = this.dtValue.substr(0, 10);
    this.timeValue = this.dtValue.substr(11, 8);
  }

  logData() {
    console.log(this.dateValue + ' ' + this.timeValue);
  }

  updateDate() {
    console.log(moment(this.date.value).format('DD/MM/yyyy'));
    this.dtValue = this.convertDate() + ' ' + this.timeValue;
  }

  updateTime() {
    console.log(this.timeValue);
    this.dtValue = this.convertDate() + ' ' + this.timeValue;
  }

  convertDate() {
    return moment(this.date.value).format('DD/MM/yyyy');
  }
}
