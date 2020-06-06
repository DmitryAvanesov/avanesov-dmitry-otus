import { Component, Input } from '@angular/core';
import { ChangePageService } from './change-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  activePage: string;

  constructor(
    private changePage: ChangePageService
  ) {
    this.activePage = 'recently-added';

    changePage.pageChanged.subscribe(
      newActivePage => {
        this.activePage = newActivePage;
      }
    );
  }

  onPageChanged(newActivePage: string) {
    this.activePage = newActivePage;
  }
}
