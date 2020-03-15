import { TestBed } from '@angular/core/testing';

import { LoginHomeService } from './login-home.service';

describe('LoginHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginHomeService = TestBed.get(LoginHomeService);
    expect(service).toBeTruthy();
  });
});
