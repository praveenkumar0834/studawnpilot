import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersAddComponent } from './manage-users-add.component';

describe('ManageUsersAddComponent', () => {
  let component: ManageUsersAddComponent;
  let fixture: ComponentFixture<ManageUsersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
