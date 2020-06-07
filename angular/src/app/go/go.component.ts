import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreWordsService, IData } from '../store-words.service';
import { ChangePageService } from '../change-page.service';
import { ChangeSettingsService } from '../change-settings.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.scss']
})
export class GoComponent implements OnInit {

  model: FormGroup;
  data: IData;
  language: string;
  numberOfWords: number;
  currentNumber: number;
  currentDate: string;
  currentWord: string;
  currentTranslation: string;
  answers: Array<boolean>;

  constructor(
    private storeWords: StoreWordsService,
    private changePage: ChangePageService,
    changeSettings: ChangeSettingsService
  ) {
    this.model = new FormGroup({
      translation: new FormControl('')
    });

    this.language = localStorage.getItem('language');
    this.numberOfWords = parseInt(localStorage.getItem('numberOfWords'));
    this.data = this.storeWords.data;
    this.currentNumber = 0;
    this.answers = new Array<boolean>(this.numberOfWords);

    changeSettings.languageChanged.subscribe(
      newLanguage => {
        this.language = newLanguage;
        localStorage.setItem('language', this.language);
      }
    );

    changeSettings.numberOfWordsChanged.subscribe(
      newNumberOfWords => {
        this.numberOfWords = newNumberOfWords;
        localStorage.setItem('numberOfWords', this.numberOfWords.toString());
      }
    );

    this.getRandom();
  }

  getRandom() {
    this.currentDate = Object.keys(this.data)[Math.floor(Math.random() * Object.keys(this.data).length)];
    this.currentWord = Object.keys(this.data[this.currentDate])[Math.floor(Math.random() * Object.keys(this.data[this.currentDate]).length)];
  }

  get word() {
    return this.currentWord;
  }

  checkTranslation() {
    if (this.data[this.currentDate][this.currentWord][this.language] == this.currentTranslation) {
      this.answers[this.currentNumber++] = true;
    }
    else {
      this.answers[this.currentNumber++] = false;
    }

    this.currentTranslation = '';

    if (this.currentNumber == this.numberOfWords) {
      this.model.disable();
    }
    else {
      this.getRandom();
    }
  }

  ngOnInit() {
    this.model.get('translation').valueChanges.subscribe((value: string) => {
      this.currentTranslation = value.toLowerCase();
    });
  }

}
