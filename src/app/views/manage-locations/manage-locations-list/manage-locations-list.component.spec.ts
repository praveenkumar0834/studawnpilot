import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLocationsListComponent } from './manage-locations-list.component';

describe('ManageLocationsListComponent', () => {
  let component: ManageLocationsListComponent;
  let fixture: ComponentFixture<ManageLocationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLocationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLocationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
