import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictAddComponent } from './district-add.component';

describe('DistrictAddComponent', () => {
  let component: DistrictAddComponent;
  let fixture: ComponentFixture<DistrictAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
