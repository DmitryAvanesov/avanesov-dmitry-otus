import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddWordsService } from '../add-words.service';
import { TranslateWordsService } from '../translate-words.service';
import { strict } from 'assert';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent implements OnInit {

  model: FormGroup;

  constructor(
    private addWords: AddWordsService,
    private translateWords: TranslateWordsService
  ) {
    this.model = new FormGroup({
      text: new FormControl('')
    });
  }

  onAddWords(): void {
    this.addWords.addWords();
  }

  @Output() pageChanged = new EventEmitter<string>();

  goToPage(page: string): void {
    this.pageChanged.emit(page);
  }

  ngOnInit(): void {
    this.model.get('text').valueChanges.subscribe(value => this.translateWords.setText(value));
  }

}
