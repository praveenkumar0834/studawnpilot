import { TestBed } from '@angular/core/testing';

import { CaOfficeService } from './ca-office.service';

describe('CaOfficeService', () => {
  let service: CaOfficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaOfficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
