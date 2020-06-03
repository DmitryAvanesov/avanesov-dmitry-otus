import { Component, Input } from '@angular/core';

export interface IData {
  [date: string]: {
    [word: string]: string
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  activePage: string;
  data: IData;

  constructor() {
    this.activePage = 'recently-added';

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

  onPageChanged(newActivePage: string) {
    this.activePage = newActivePage;
  }
}
