import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLandDataEditComponent } from './manage-land-data-edit.component';

describe('ManageLandDataEditComponent', () => {
  let component: ManageLandDataEditComponent;
  let fixture: ComponentFixture<ManageLandDataEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLandDataEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLandDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
