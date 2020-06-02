import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  activePage: string;

  constructor() {
    this.activePage = 'recently-added';
  }

  onPageChanged(newActivePage: string) {
    this.activePage = newActivePage;
  }
}
