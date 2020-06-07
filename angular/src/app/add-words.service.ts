import { Injectable } from '@angular/core';
import { TranslateWordsService } from './translate-words.service';
import { StoreWordsService } from './store-words.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddWordsService {

  constructor(
    private translateWords: TranslateWordsService,
    private storeWords: StoreWordsService
  ) { }

  addWords() {
    this.translateWords.translateWords.subscribe((response) => {
      this.storeWords.storeWords(response);
    });
  }

}
