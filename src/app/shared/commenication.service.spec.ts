import { TestBed } from '@angular/core/testing';

import { CommenicationService } from './commenication.service';

describe('CommenicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommenicationService = TestBed.get(CommenicationService);
    expect(service).toBeTruthy();
  });
});
