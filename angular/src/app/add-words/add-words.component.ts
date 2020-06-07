import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddWordsService } from '../add-words.service';
import { TranslateWordsService } from '../translate-words.service';
import { strict } from 'assert';
import { ChangePageService } from '../change-page.service';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent implements OnInit {

  model: FormGroup;

  constructor(
    public addWords: AddWordsService,
    private translateWords: TranslateWordsService
  ) {
    this.model = new FormGroup({
      text: new FormControl('')
    });
  }

  onAddWords() {
    this.addWords.addWords();
  }

  ngOnInit() {
    this.model.get('text').valueChanges.subscribe(value => this.translateWords.setText(value));
  }

}
