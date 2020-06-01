import { TestBed } from '@angular/core/testing';

import { StoreWordsService } from './store-words.service';

describe('StoreWordsService', () => {
  let service: StoreWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
