import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManageCaOfficesComponent } from './edit-manage-ca-offices.component';

describe('EditManageCaOfficesComponent', () => {
  let component: EditManageCaOfficesComponent;
  let fixture: ComponentFixture<EditManageCaOfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditManageCaOfficesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManageCaOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
