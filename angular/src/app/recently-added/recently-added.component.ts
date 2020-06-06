import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StoreWordsService, IData } from '../store-words.service';
import { ChangePageService } from '../change-page.service';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {

  data: IData;

  constructor(
    private storeWords: StoreWordsService,
    private changePage: ChangePageService
  ) { }

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

  ngOnInit(): void { }

}
