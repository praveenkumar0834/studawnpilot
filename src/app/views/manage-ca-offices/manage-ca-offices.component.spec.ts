import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCaOfficesComponent } from './manage-ca-offices.component';

describe('ManageCaOfficesComponent', () => {
  let component: ManageCaOfficesComponent;
  let fixture: ComponentFixture<ManageCaOfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCaOfficesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCaOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
