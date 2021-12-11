import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';
import * as _moment from 'moment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';



export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM Y',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM Y'
  },
};

export interface DateRange {
  from: number;
  to: number;
}

@Component({
  selector: 'app-date-picker-filter',
  templateUrl: './date-picker-filter.component.html',
  styleUrls: ['./date-picker-filter.component.less'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DatePickerFilterComponent implements OnInit {
  range: FormGroup = new FormGroup({
    from: new FormControl(),
    to: new FormControl(),
  });

  @Output()
  dateRangeChanged: EventEmitter<DateRange>;

  constructor() {
    this.dateRangeChanged = new EventEmitter<DateRange>();
  }
  ngOnInit(): void {
    this.range.valueChanges
      .pipe(
        filter(
          (range) =>
            new Date(range?.from).getTime() <= new Date(range?.to).getTime() ||
            (!range.from && !range.to)
        )
      )
      .subscribe((range) => {
        console.log(range);

        if (range.from && range.to) {
          this.dateRangeChanged.emit({
            from: new Date(range.from).getTime(),
            to: new Date(range.to).getTime(),
          });
        } else {
          this.dateRangeChanged.emit(null);
        }
      });
  }
}
