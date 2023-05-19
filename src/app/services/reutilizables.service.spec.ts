import { TestBed } from '@angular/core/testing';

import { ReutilizablesService } from './reutilizables.service';

describe('ReutilizablesService', () => {
  let service: ReutilizablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReutilizablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
