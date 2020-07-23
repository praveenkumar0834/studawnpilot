import { TestBed } from '@angular/core/testing';

import { CaOfficeListService } from './ca-office-list.service';

describe('CaOfficeListService', () => {
  let service: CaOfficeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaOfficeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
