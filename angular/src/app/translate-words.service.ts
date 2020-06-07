import { Injectable } from '@angular/core';
import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { BehaviorSubject, Observable, from, Observer } from 'rxjs';

export interface IResponse {
  word: string,
  translations: {
    ru: string,
    es: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class TranslateWordsService {

  private text: string;
  public translateWords: Observable<IResponse>;

  constructor() {
    this.translateWords = Observable.create((observer: Observer<IResponse>) => {
      this.text.split(' ').forEach(async word => {
        const translations = {
          ru: '',
          es: ''
        };

        for (const language of Object.keys(translations)) {
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
              "to": language,
              "api-version": "3.0"
            }, "data": [{
              "Text": word
            }]
          });

          translations[language] = translation.data[0].translations[0].text;
        };

        observer.next({
          word: word,
          translations: translations
        })
      });
    });
  }

  setText(newText: string): void {
    this.text = newText;
  }

}
