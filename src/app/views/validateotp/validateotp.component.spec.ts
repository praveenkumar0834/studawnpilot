import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateotpComponent } from './validateotp.component';

describe('ValidateotpComponent', () => {
  let component: ValidateotpComponent;
  let fixture: ComponentFixture<ValidateotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
