import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardReconcilationComponent } from './award-reconcilation.component';

describe('AwardReconcilationComponent', () => {
  let component: AwardReconcilationComponent;
  let fixture: ComponentFixture<AwardReconcilationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardReconcilationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardReconcilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
