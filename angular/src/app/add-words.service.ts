import { Injectable } from '@angular/core';
import { TranslateWordService } from './translate-word.service';
import { StoreWordsService } from './store-words.service';

@Injectable({
  providedIn: 'root'
})
export class AddWordsService {

  constructor(
    private translateWord: TranslateWordService,
    private storeWords: StoreWordsService
  ) { }

  addWords(text: string): void {
    const words = text.split(' ');

    words.forEach(word => {
      this.translateWord.translateWord(word);
    });
  }

  ngOnInit(): void { 
    this.translateWord.translation.subscribe((str) => {console.log(str)});
  }
}
