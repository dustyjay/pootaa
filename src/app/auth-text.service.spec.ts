import { TestBed } from '@angular/core/testing';

import { AuthTextService } from './auth-text.service';

describe('AuthTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthTextService = TestBed.get(AuthTextService);
    expect(service).toBeTruthy();
  });
});
