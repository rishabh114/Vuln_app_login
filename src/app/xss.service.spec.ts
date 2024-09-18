import { TestBed } from '@angular/core/testing';

import { XssService } from './xss.service';

describe('XssService', () => {
  let service: XssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
