import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebsiteReportsService } from './services/website-reports.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteReportsComponent } from './website-reports.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [WebsiteReportsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ScrollingModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [WebsiteReportsService],
  exports: [WebsiteReportsComponent],
})
export class WebsiteReportsModule {}
