import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLandDataComponent } from './manage-land-data.component';

describe('ManageLandDataComponent', () => {
  let component: ManageLandDataComponent;
  let fixture: ComponentFixture<ManageLandDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLandDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLandDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
