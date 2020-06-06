import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChangePageService } from '../change-page.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private changePage: ChangePageService
  ) { }
  
  goToPage(page: string) {
    this.changePage.changePage(page);
  }

  ngOnInit(): void { }

}
