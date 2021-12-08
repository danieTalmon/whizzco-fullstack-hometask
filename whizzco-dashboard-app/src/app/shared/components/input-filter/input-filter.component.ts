import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.less'],
})
export class InputFilterComponent implements OnInit {
  @Input()
  filterName: string;

  @Output()
  filterChange: EventEmitter<string>;

  constructor() {
    this.filterChange = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  onFilterChange(input: string) {
    this.filterChange.emit(input);
  }
}
