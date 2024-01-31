import { TestBed } from '@angular/core/testing';

import { ShareblogidService } from './shareblogid.service';

describe('ShareblogidService', () => {
  let service: ShareblogidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareblogidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
