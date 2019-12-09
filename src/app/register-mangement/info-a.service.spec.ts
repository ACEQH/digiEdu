import { TestBed } from '@angular/core/testing';

import { InfoAService } from './info-a.service';

describe('InfoAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoAService = TestBed.get(InfoAService);
    expect(service).toBeTruthy();
  });
});
