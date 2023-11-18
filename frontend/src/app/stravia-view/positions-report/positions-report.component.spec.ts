import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsReportComponent } from './positions-report.component';

describe('PositionsReportComponent', () => {
  let component: PositionsReportComponent;
  let fixture: ComponentFixture<PositionsReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionsReportComponent]
    });
    fixture = TestBed.createComponent(PositionsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
