import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLandDataAddComponent } from './manage-land-data-add.component';

describe('ManageLandDataAddComponent', () => {
  let component: ManageLandDataAddComponent;
  let fixture: ComponentFixture<ManageLandDataAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLandDataAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLandDataAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
