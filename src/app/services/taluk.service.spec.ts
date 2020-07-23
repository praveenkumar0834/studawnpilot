import { TestBed } from '@angular/core/testing';

import { TalukService } from './taluk.service';

describe('TalukService', () => {
  let service: TalukService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalukService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
