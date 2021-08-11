import { TestBed } from '@angular/core/testing';

import { UsersCoachService } from './users-coach.service';

describe('UsersCoachService', () => {
  let service: UsersCoachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersCoachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
