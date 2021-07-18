import { TestBed } from '@angular/core/testing';

import { QuestionsLoadingService } from './questions-loading.service';

describe('QuestionsLoadingService', () => {
  let service: QuestionsLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
