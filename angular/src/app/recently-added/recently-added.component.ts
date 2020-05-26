import { Component, OnInit } from '@angular/core';

interface IWords {
  [date: string]: {
    [word: string]: string
  }
}

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {

  data: IWords;

  constructor() {
    this.data = {
      '04.05.20': {
        'to go': 'идти',
        'stairs': 'ступеньки'
      },
      '07.05.20': {
        'to fly': 'летать'
      }
    };
  }

  get dates() {
    return Object.keys(this.data);
  }

  getWords(date: string) {
    return Object.keys(this.data[date]);
  }

  ngOnInit(): void {
  }

}
