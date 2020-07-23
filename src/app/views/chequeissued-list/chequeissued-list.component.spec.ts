import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeissuedListComponent } from './chequeissued-list.component';

describe('ChequeissuedListComponent', () => {
  let component: ChequeissuedListComponent;
  let fixture: ComponentFixture<ChequeissuedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeissuedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeissuedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
