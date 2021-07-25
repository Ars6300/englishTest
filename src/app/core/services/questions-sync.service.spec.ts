import { TestBed } from '@angular/core/testing';

import { QuestionsSyncService } from './questions-sync.service';

describe('QuestionsSyncService', () => {
  let service: QuestionsSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
