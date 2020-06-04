import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StoreWordsService, IData } from '../store-words.service';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {

  data: IData;

  constructor(
    private storeWords: StoreWordsService
  ) { }

  get dates() {
    this.data = this.storeWords.data;
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
