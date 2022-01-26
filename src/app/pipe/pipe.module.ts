import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './time.pipe';
import { DatePipe } from './date.pipe';
import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { NumberWithDoubleDigitsPipe } from './number-with-double-digits.pipe';
import { FullLanguagePipe } from './full-language.pipe';

@NgModule({
  declarations: [
    TimePipe,
    DatePipe,
    NumberWithCommasPipe,
    NumberWithDoubleDigitsPipe,
    FullLanguagePipe
  ],
  exports: [
    TimePipe,
    DatePipe,
    NumberWithCommasPipe,
    NumberWithDoubleDigitsPipe,
    FullLanguagePipe
  ],
  imports: [
    CommonModule
  ]
})

export class PipeModule { }
