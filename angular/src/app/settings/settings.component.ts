import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  @Output() pageChanged = new EventEmitter<string>();
  
  goToPage(page: string) {
    this.pageChanged.emit(page);
  }

  ngOnInit(): void { }

}
