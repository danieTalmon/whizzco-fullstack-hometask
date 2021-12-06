import { WebsiteReportsService } from './services/website-reports.service';
import { WebReport } from './../models/website-report.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-website-reports',
  templateUrl: './website-reports.component.html',
  styleUrls: ['./website-reports.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WebsiteReportsComponent implements OnInit, OnDestroy {

  dataSource: WebReport[] | null;
  columnsToDisplay = ['Website ID', 'Widget ID'];
  expandedElement: WebReport |null;
  destroy$: Subject<void>;

  constructor(private websiteReportsService: WebsiteReportsService) {
    this.destroy$ = new Subject<void>()
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void{
    this.websiteReportsService.getAllReports().pipe(
      takeUntil(this.destroy$)
    ).subscribe((webReports: WebReport[]) => {
      this.dataSource = webReports;
    });
  }
}
