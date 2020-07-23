import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLandRateAddComponent } from './manage-land-rate-add.component';

describe('ManageLandRateAddComponent', () => {
  let component: ManageLandRateAddComponent;
  let fixture: ComponentFixture<ManageLandRateAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLandRateAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLandRateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
