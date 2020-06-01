import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddWordsService } from '../add-words.service';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent implements OnInit {

  constructor(private addWords: AddWordsService) { }

  onAddWords(text: string) {
    this.addWords.addWords(text);
  }

  @Output() pageChanged = new EventEmitter<string>();

  goToPage(page: string) {
    this.pageChanged.emit(page);
  }

  ngOnInit(): void {
  }

}
