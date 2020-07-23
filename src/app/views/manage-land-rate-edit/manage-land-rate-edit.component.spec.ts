import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLandRateEditComponent } from './manage-land-rate-edit.component';

describe('ManageLandRateEditComponent', () => {
  let component: ManageLandRateEditComponent;
  let fixture: ComponentFixture<ManageLandRateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLandRateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLandRateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
