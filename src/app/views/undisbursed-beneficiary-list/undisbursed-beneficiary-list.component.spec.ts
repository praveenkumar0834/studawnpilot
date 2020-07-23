import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndisbursedBeneficiaryListComponent } from './undisbursed-beneficiary-list.component';

describe('UndisbursedBeneficiaryListComponent', () => {
  let component: UndisbursedBeneficiaryListComponent;
  let fixture: ComponentFixture<UndisbursedBeneficiaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndisbursedBeneficiaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndisbursedBeneficiaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
