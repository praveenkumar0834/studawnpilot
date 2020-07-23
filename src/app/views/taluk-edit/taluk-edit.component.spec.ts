import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukEditComponent } from './taluk-edit.component';

describe('TalukEditComponent', () => {
  let component: TalukEditComponent;
  let fixture: ComponentFixture<TalukEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalukEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalukEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
