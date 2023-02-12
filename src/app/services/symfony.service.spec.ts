import { TestBed } from '@angular/core/testing';

import { SymfonyService } from './symfony.service';

describe('SymfonyService', () => {
  let service: SymfonyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymfonyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
