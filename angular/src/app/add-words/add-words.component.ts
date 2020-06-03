import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddWordsService } from '../add-words.service';
import { TranslateWordsService } from '../translate-words.service';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent implements OnInit {

  constructor(
    private addWords: AddWordsService,
    private translateWords: TranslateWordsService
  ) { }

  onChangeWords(newText: string) {
    this.translateWords.text = newText;
  }

  onAddWords() {
    this.addWords.addWords();
  }

  @Output() pageChanged = new EventEmitter<string>();

  goToPage(page: string) {
    this.pageChanged.emit(page);
  }

  ngOnInit(): void {
  }

}
