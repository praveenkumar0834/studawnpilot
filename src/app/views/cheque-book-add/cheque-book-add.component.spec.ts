import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeBookAddComponent } from './cheque-book-add.component';

describe('ChequeBookAddComponent', () => {
  let component: ChequeBookAddComponent;
  let fixture: ComponentFixture<ChequeBookAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeBookAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeBookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
