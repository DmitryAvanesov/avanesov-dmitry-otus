import { Injectable } from '@angular/core';
import { IResponse } from './translate-words.service';

@Injectable({
  providedIn: 'root'
})
export class StoreWordsService {

  data: JSON;

  constructor() { 
    this.data = JSON.parse(localStorage.getItem('data')) || {};
  }

  storeWords(response: IResponse) {
    console.log(this.data);
    this.data[response.word] = response.translation;
    localStorage.setItem('data', JSON.stringify(this.data));
  }

}
