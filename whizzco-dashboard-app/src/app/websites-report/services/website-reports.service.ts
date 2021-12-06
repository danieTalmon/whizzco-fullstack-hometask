import { WebReport } from './../../models/website-report.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class WebsiteReportsService {
  private readonly baseURL: string = '/report/get';

  constructor(private http: HttpClient) {}

  getAllReports(): Observable<WebReport[]> {
    return this.http.get<WebReport[]>(`${this.baseURL}/allData`).pipe(
      catchError((e) => {
        console.error(`${this.baseURL}/getAllData response error: ${e}`);
        return of(null);
      })
    );
  }

  getReportsByDateFilter(
    fromDate: number,
    toDate: number
  ): Observable<WebReport[]> {
    return this.http
      .get<WebReport[]>(`${this.baseURL}/${fromDate}/${toDate}`)
      .pipe(
        catchError((e) => {
          console.error(
            `${this.baseURL}/${fromDate}/${toDate} response error: ${e}`
          );
          return of(null);
        })
      );
  }
}
