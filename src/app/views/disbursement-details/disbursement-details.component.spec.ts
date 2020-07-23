import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementDetailsComponent } from './disbursement-details.component';

describe('DisbursementDetailsComponent', () => {
  let component: DisbursementDetailsComponent;
  let fixture: ComponentFixture<DisbursementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisbursementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisbursementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
