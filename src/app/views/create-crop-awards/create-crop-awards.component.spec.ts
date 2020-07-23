import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCropAwardsComponent } from './create-crop-awards.component';

describe('CreateCropAwardsComponent', () => {
  let component: CreateCropAwardsComponent;
  let fixture: ComponentFixture<CreateCropAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCropAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCropAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
