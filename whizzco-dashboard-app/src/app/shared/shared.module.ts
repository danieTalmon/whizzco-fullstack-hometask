import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatePickerFilterComponent } from './components/date-picker-filter/date-picker-filter.component';

@NgModule({
  declarations: [
    NavbarComponent,
    InputFilterComponent,
    DatePickerFilterComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    InputFilterComponent,
    DatePickerFilterComponent,
  ]
})
export class SharedModule {}
