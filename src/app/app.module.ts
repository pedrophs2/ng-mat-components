import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { DatePickerCustomComponent } from './components/date-picker-custom/date-picker-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    DatePickerCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule, {provide: OWL_DATE_TIME_LOCALE, useValue: 'pt-br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
