import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChequeBookComponent } from './manage-cheque-book.component';

describe('ManageChequeBookComponent', () => {
  let component: ManageChequeBookComponent;
  let fixture: ComponentFixture<ManageChequeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageChequeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChequeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
