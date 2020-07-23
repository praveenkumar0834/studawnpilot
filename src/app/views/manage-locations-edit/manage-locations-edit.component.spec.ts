import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLocationsEditComponent } from './manage-locations-edit.component';

describe('ManageLocationsEditComponent', () => {
  let component: ManageLocationsEditComponent;
  let fixture: ComponentFixture<ManageLocationsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLocationsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLocationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
