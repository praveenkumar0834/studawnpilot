import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCropAwardsComponent } from './edit-crop-awards.component';

describe('EditCropAwardsComponent', () => {
  let component: EditCropAwardsComponent;
  let fixture: ComponentFixture<EditCropAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCropAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCropAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
