import { SharedModule } from './../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebsiteReportsService } from './services/website-reports.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteReportsComponent } from './website-reports.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [WebsiteReportsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ScrollingModule,
    MatPaginatorModule,
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [WebsiteReportsService],
  exports: [WebsiteReportsComponent],
})
export class WebsiteReportsModule {}
