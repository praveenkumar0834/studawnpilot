import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAwardsComponent } from './manage-awards.component';

describe('ManageAwardsComponent', () => {
  let component: ManageAwardsComponent;
  let fixture: ComponentFixture<ManageAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
