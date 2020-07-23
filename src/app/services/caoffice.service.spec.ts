import { TestBed } from '@angular/core/testing';

import { CaofficeService } from './caoffice.service';

describe('CaofficeService', () => {
  let service: CaofficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaofficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
