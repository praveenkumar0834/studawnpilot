import { TestBed } from '@angular/core/testing';

import { LocationlistService } from './locationlist.service';

describe('LocationlistService', () => {
  let service: LocationlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
