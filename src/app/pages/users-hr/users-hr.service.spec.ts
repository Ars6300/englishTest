import { TestBed } from '@angular/core/testing';

import { UsersHrService } from './users-hr.service';

describe('UsersHrService', () => {
  let service: UsersHrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersHrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
