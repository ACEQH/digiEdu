import { TestBed } from '@angular/core/testing';

import { InfoPService } from './info-p.service';

describe('InfoPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoPService = TestBed.get(InfoPService);
    expect(service).toBeTruthy();
  });
});
