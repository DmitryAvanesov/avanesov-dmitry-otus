import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

interface IRequest {
  "method": string,
  "headers": {
    "x-rapidapi-host": string,
    "x-rapidapi-key": string,
    "accept-encoding": string,
    "content-type": string
  },
  "body": {
    "source": string,
    "q": string,
    "target": string
  }
}

@Injectable({
  providedIn: 'root'
})
export class TranslateWordService {

  translation: BehaviorSubject<string>;

  constructor() {
    this.translation = new BehaviorSubject<string>(null);
  }

  async translateWord(word: string) {
    const key = 'a59547b963mshe74fe6a27de2227p140951jsn76298672df34';

    const translation = await axios({
      "method": "POST",
      "url": "https://microsoft-translator-text.p.rapidapi.com/translate",
      "headers": {
        "content-type": "application/json",
        "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
        "x-rapidapi-key": "a59547b963mshe74fe6a27de2227p140951jsn76298672df34",
        "accept": "application/json",
        "useQueryString": true
      }, "params": {
        "profanityAction": "NoAction",
        "textType": "plain",
        "to": "ru",
        "api-version": "3.0"
      }, "data": [{
        "Text": word
      }]
    });

    console.log(translation.data[0].translations[0].text);
  }
}
