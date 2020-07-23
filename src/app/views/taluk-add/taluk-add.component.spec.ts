import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukAddComponent } from './taluk-add.component';

describe('TalukAddComponent', () => {
  let component: TalukAddComponent;
  let fixture: ComponentFixture<TalukAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalukAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalukAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
