import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChangePageService } from '../change-page.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ChangeSettingsService } from '../change-settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  model: FormGroup;
  language: string;
  numberOfWords: number;

  constructor(
    private changePage: ChangePageService,
    private changeSettings: ChangeSettingsService
  ) {
    this.language = localStorage.getItem('language');
    this.numberOfWords = parseInt(localStorage.getItem('numberOfWords'));

    this.model = new FormGroup({
      language: new FormControl(this.language),
      numberOfWords: new FormControl(this.numberOfWords)
    });

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
  }

  goToPage(page: string) {
    this.changePage.changePage(page);
  }

  ngOnInit() {
    this.model.get('language').valueChanges.subscribe(value => this.changeSettings.changeLanguage(value));
    this.model.get('numberOfWords').valueChanges.subscribe(value => this.changeSettings.changeNumberOfWords(value));
  }

}
