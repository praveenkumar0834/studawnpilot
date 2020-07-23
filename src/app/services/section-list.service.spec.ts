import { TestBed } from '@angular/core/testing';

import { SectionListService } from './section-list.service';

describe('SectionListService', () => {
  let service: SectionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
