import { WebsiteReportsService } from './services/website-reports.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteReportsComponent } from './website-reports.component';



@NgModule({
  declarations: [WebsiteReportsComponent],
  imports: [
    CommonModule
  ],
  providers: [WebsiteReportsService]
})
export class WebsiteReportsModule { }
