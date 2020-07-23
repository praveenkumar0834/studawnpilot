import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLandRateComponent } from './manage-land-rate.component';

describe('ManageLandRateComponent', () => {
  let component: ManageLandRateComponent;
  let fixture: ComponentFixture<ManageLandRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLandRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLandRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
