import { TestBed } from '@angular/core/testing';

import { DistrictaddService } from './districtadd.service';

describe('DistrictaddService', () => {
  let service: DistrictaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistrictaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
