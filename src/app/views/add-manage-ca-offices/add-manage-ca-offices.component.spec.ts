import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManageCaOfficesComponent } from './add-manage-ca-offices.component';

describe('AddManageCaOfficesComponent', () => {
  let component: AddManageCaOfficesComponent;
  let fixture: ComponentFixture<AddManageCaOfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddManageCaOfficesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManageCaOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
