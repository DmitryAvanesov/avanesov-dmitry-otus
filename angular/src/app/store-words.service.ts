import { Injectable } from '@angular/core';
import { IResponse } from './translate-words.service';

export interface IData {
  [date: string]: {
    [word: string]: {
      ru: string,
      es: string
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class StoreWordsService {

  data: IData;

  constructor() {
    this.data = JSON.parse(localStorage.getItem('data')) || {};
  }

  storeWords(response: IResponse) {
    const date = new Date();
    const formattedDate = `${date.getDay()}.${date.getMonth() + 1}.${date.getFullYear()}`;

    console.log(response.translations)

    this.data[formattedDate] = {
      ...this.data[formattedDate],
      [response.word]: {
        ru: response.translations.ru,
        es: response.translations.es
      }
    };

    localStorage.setItem('data', JSON.stringify(this.data));
  }

}
