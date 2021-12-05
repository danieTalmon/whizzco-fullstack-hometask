import { SharedModule } from './shared/shared.module';
import { WebsiteReportsModule } from './websites-report/websites-report.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WebsiteReportsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
