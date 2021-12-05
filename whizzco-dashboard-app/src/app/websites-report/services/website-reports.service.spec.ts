import { TestBed } from '@angular/core/testing';

import { WebsiteReportsService } from './website-reports.service';

describe('WebsiteReportsService', () => {
  let service: WebsiteReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
