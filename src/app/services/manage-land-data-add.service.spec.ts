import { TestBed } from '@angular/core/testing';

import { ManageLandDataAddService } from './manage-land-data-add.service';

describe('ManageLandDataAddService', () => {
  let service: ManageLandDataAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageLandDataAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
