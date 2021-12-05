import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteReportsComponent } from './website-reports.component';

describe('WebsitesReportComponent', () => {
  let component: WebsiteReportsComponent;
  let fixture: ComponentFixture<WebsiteReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
