import { TestBed } from '@angular/core/testing';

import { TranslateWordService } from './translate-word.service';

describe('TranslateWordService', () => {
  let service: TranslateWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
