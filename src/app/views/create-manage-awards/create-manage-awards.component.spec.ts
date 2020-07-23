import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManageAwardsComponent } from './create-manage-awards.component';

describe('CreateManageAwardsComponent', () => {
  let component: CreateManageAwardsComponent;
  let fixture: ComponentFixture<CreateManageAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateManageAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManageAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
