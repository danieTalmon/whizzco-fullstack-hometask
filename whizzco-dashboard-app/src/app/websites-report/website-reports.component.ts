import { DateRange } from './../shared/components/date-picker-filter/date-picker-filter.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { of, Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil } from 'rxjs/operators';

import { WebReport } from './../models/website-report.model';
import { WebsiteReportsService } from './services/website-reports.service';

interface ReportFilters {
  websiteID: string;
  widgetID: string;
}

@Component({
  selector: 'app-website-reports',
  templateUrl: './website-reports.component.html',
  styleUrls: ['./website-reports.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class WebsiteReportsComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<WebReport>;
  columnsToDisplay = ['websiteID', 'widgetID'];
  expandedElement: WebReport | null;
  destroy$: Subject<void>;
  readonly websiteIDFilterName = 'WebsiteId Filter';
  readonly widgetIDFilterName = 'WidgetId Filter';
  private reportFilters: ReportFilters;
  private datepickerFilterValue: Subject<DateRange>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private websiteReportsService: WebsiteReportsService) {
    this.destroy$ = new Subject<void>();
    this.dataSource = new MatTableDataSource<WebReport>();
    this.datepickerFilterValue = new Subject<DateRange>();
  }

  ngOnInit(): void {
    this.reportFilters = { websiteID: '', widgetID: '' };

    this.initFilterPredicate();

    this.datepickerFilterValue
      .asObservable()
      .pipe(
        startWith(of(null)),
        switchMap((datepickerFilterValue: DateRange) =>
          datepickerFilterValue
            ? this.websiteReportsService.getReportsByDateFilter(
                datepickerFilterValue.from,
                datepickerFilterValue.to
              )
            : this.websiteReportsService.getAllReports()
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((webReports: WebReport[]) => {
        this.dataSource.data = webReports;
        this.dataSource.paginator = this.paginator;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  onWebsiteIdFilterChange(value: string) {
    this.reportFilters.websiteID = value;

    this.dataSource.filter = JSON.stringify(this.reportFilters);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onWidgetIdFilterChange(value: string) {
    this.reportFilters.widgetID = value;

    this.dataSource.filter = JSON.stringify(this.reportFilters);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDatepickerFilterChange(datepickerRange: DateRange) {
    this.datepickerFilterValue.next(datepickerRange);
  }

  private initFilterPredicate() {
    this.dataSource.filterPredicate = (
      data: WebReport,
      filtersJson: string
    ) => {
      const matchFilter: boolean[] = [];
      const filters = JSON.parse(filtersJson);

      Object.keys(filters).forEach((filterName) => {
        const val = data[filterName] === null ? '' : data[filterName];
        matchFilter.push(
          val.toLowerCase().includes(filters[filterName].toLowerCase())
        );
      });
      return matchFilter.every((filter) => filter);
    };
  }
}
