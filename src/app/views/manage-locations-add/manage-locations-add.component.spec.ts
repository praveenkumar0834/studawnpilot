import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLocationsAddComponent } from './manage-locations-add.component';

describe('ManageLocationsAddComponent', () => {
  let component: ManageLocationsAddComponent;
  let fixture: ComponentFixture<ManageLocationsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLocationsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLocationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
