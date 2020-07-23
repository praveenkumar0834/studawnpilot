import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquittanceComponent } from './acquittance.component';

describe('AcquittanceComponent', () => {
  let component: AcquittanceComponent;
  let fixture: ComponentFixture<AcquittanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquittanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
