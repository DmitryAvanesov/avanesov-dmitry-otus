import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IData } from '../app.component';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.scss']
})
export class GoComponent implements OnInit {

  @Input() data: IData;

  constructor() { }

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
