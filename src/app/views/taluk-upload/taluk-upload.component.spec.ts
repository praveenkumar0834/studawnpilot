import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukUploadComponent } from './taluk-upload.component';

describe('TalukUploadComponent', () => {
  let component: TalukUploadComponent;
  let fixture: ComponentFixture<TalukUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalukUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalukUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
