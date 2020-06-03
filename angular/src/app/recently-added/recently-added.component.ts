import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IData } from '../app.component';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {

  @Input() data: IData;

  constructor() {}

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
