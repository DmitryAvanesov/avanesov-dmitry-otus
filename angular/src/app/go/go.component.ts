import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreWordsService, IData } from '../store-words.service';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.scss']
})
export class GoComponent implements OnInit {

  data: IData;

  constructor(
    private storeWords: StoreWordsService
  ) {
    this.data = this.storeWords.data;
  }

  get dates() {
    return Object.keys(this.data).reverse();
  }

  getWords(date: string) {
    return Object.keys(this.data[date]);
  }

  @Output() pageChanged = new EventEmitter<string>();

  goToPage(page: string) {
    this.pageChanged.emit(page);
  }

  ngOnInit(): void { }

}
