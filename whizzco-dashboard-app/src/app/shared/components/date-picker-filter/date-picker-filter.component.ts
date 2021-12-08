import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface DateRange {
  from: number;
  to: number;
}

@Component({
  selector: 'app-date-picker-filter',
  templateUrl: './date-picker-filter.component.html',
  styleUrls: ['./date-picker-filter.component.less'],
})
export class DatePickerFilterComponent implements OnInit {
  range: FormGroup;

  @Output()
  dateRangeChanged: EventEmitter<DateRange>;

  constructor() {
    this.range = new FormGroup({
      from: new FormControl(),
      to: new FormControl(),
    });

    this.dateRangeChanged = new EventEmitter<DateRange>();
  }
  ngOnInit(): void {
    this.range.valueChanges.subscribe((range) => {
      if (range.from && range.to) {
        this.dateRangeChanged.emit({
          from: new Date(range.from).getTime(),
          to: new Date(range.to).getTime(),
        });
      }
    });
  }
}
