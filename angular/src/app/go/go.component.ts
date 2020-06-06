import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreWordsService, IData } from '../store-words.service';
import { ChangePageService } from '../change-page.service';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.scss']
})
export class GoComponent implements OnInit {

  data: IData;

  constructor(
    private storeWords: StoreWordsService,
    private changePage: ChangePageService
  ) {
    this.data = this.storeWords.data;
  }

  get dates() {
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
