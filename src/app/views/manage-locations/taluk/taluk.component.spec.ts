import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukComponent } from './taluk.component';

describe('TalukComponent', () => {
  let component: TalukComponent;
  let fixture: ComponentFixture<TalukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
