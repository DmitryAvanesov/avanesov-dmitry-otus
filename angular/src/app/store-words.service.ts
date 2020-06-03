import { Injectable } from '@angular/core';
import { IResponse } from './translate-words.service';

export interface IData {
  [date: string]: {
    [word: string]: string
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

    this.data[formattedDate] = {
      ...this.data[formattedDate],
      [response.word]: response.translation
    };

    localStorage.setItem('data', JSON.stringify(this.data));
  }

}
