import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTalukComponent } from './add-taluk.component';

describe('AddTalukComponent', () => {
  let component: AddTalukComponent;
  let fixture: ComponentFixture<AddTalukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTalukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTalukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
