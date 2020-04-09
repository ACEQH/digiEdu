import { TestBed } from '@angular/core/testing';

import { InfoServicet } from './info.service';

describe('InfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoServicet = TestBed.get(InfoServicet);
    expect(service).toBeTruthy();
  });
});
