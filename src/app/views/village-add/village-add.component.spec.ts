import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageAddComponent } from './village-add.component';

describe('VillageAddComponent', () => {
  let component: VillageAddComponent;
  let fixture: ComponentFixture<VillageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
