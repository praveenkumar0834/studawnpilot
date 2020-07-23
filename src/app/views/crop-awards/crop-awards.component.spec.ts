import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropAwardsComponent } from './crop-awards.component';

describe('CropAwardsComponent', () => {
  let component: CropAwardsComponent;
  let fixture: ComponentFixture<CropAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
