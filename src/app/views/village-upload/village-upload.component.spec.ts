import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageUploadComponent } from './village-upload.component';

describe('VillageUploadComponent', () => {
  let component: VillageUploadComponent;
  let fixture: ComponentFixture<VillageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
