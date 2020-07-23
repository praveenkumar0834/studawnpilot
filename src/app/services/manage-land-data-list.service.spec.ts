import { TestBed } from '@angular/core/testing';

import { ManageLandDataListService } from './manage-land-data-list.service';

describe('ManageLandDataListService', () => {
  let service: ManageLandDataListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageLandDataListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
