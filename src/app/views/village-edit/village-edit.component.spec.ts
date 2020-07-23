import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageEditComponent } from './village-edit.component';

describe('VillageEditComponent', () => {
  let component: VillageEditComponent;
  let fixture: ComponentFixture<VillageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
