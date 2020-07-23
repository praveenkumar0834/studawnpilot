import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaleChequeListComponent } from './stale-cheque-list.component';

describe('StaleChequeListComponent', () => {
  let component: StaleChequeListComponent;
  let fixture: ComponentFixture<StaleChequeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaleChequeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaleChequeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
