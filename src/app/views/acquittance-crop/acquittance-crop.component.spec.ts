import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquittanceCropComponent } from './acquittance-crop.component';

describe('AcquittanceCropComponent', () => {
  let component: AcquittanceCropComponent;
  let fixture: ComponentFixture<AcquittanceCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquittanceCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquittanceCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
