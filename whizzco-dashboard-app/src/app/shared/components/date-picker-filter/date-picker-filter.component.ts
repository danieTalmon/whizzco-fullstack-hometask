import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker-filter',
  templateUrl: './date-picker-filter.component.html',
  styleUrls: ['./date-picker-filter.component.less']
})
export class DatePickerFilterComponent implements OnInit {

  range: FormGroup;

  constructor() {
    this.range =  new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

}
