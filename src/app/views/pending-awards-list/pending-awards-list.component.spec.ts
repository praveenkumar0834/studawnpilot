import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAwardsListComponent } from './pending-awards-list.component';

describe('PendingAwardsListComponent', () => {
  let component: PendingAwardsListComponent;
  let fixture: ComponentFixture<PendingAwardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingAwardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAwardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
