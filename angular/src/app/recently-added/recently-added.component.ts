import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StoreWordsService, IData } from '../store-words.service';
import { ChangePageService } from '../change-page.service';
import { ChangeSettingsService } from '../change-settings.service';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {

  data: IData;
  language: string;

  constructor(
    private storeWords: StoreWordsService,
    private changePage: ChangePageService,
    changeSettings: ChangeSettingsService
  ) {
    changeSettings.languageChanged.subscribe(
      newLanguage => {
        this.language = newLanguage;
      }
    );
  }

  get dates() {
    this.data = this.storeWords.data;
    return Object.keys(this.data).reverse();
  }

  getWords(date: string) {
    return Object.keys(this.data[date]);
  }

  goToPage(page: string) {
    this.changePage.changePage(page);
  }

  ngOnInit() { }

}
