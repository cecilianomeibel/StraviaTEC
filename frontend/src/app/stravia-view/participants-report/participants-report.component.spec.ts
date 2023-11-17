import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsReportComponent } from './participants-report.component';

describe('ParticipantsReportComponent', () => {
  let component: ParticipantsReportComponent;
  let fixture: ComponentFixture<ParticipantsReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantsReportComponent]
    });
    fixture = TestBed.createComponent(ParticipantsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
