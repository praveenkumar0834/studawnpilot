import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersEditComponent } from './manage-users-edit.component';

describe('ManageUsersEditComponent', () => {
  let component: ManageUsersEditComponent;
  let fixture: ComponentFixture<ManageUsersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
