import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManageAwardsComponent } from './edit-manage-awards.component';

describe('EditManageAwardsComponent', () => {
  let component: EditManageAwardsComponent;
  let fixture: ComponentFixture<EditManageAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditManageAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManageAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
