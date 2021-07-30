import { TestBed } from '@angular/core/testing';

import { ProfileResultsService } from './profile-results.service';

describe('ProfileResultsService', () => {
  let service: ProfileResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
