import { Component, Input } from '@angular/core';
import { ChangePageService } from './change-page.service';
import { ChangeSettingsService } from './change-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  activePage: string;

  constructor(
    changePage: ChangePageService,
    changeSettings: ChangeSettingsService
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
