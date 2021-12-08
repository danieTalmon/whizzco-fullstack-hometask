import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatePickerFilterComponent } from './components/date-picker-filter/date-picker-filter.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    InputFilterComponent,
    DatePickerFilterComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  exports: [NavbarComponent, InputFilterComponent, DatePickerFilterComponent],
})
export class SharedModule {}
