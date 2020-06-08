import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddWordsService } from '../add-words.service';
import { TranslateWordsService } from '../translate-words.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent implements OnInit {

  model: FormGroup;

  constructor(
    private addWords: AddWordsService,
    private translateWords: TranslateWordsService,
    private router: Router
  ) {
    this.model = new FormGroup({
      text: new FormControl('')
    });
  }

  onAddWords() {
    this.addWords.addWords();
    this.router.navigate(['/recently-added']);
  }

  ngOnInit() {
    this.model.get('text').valueChanges.subscribe(value => this.translateWords.setText(value));
  }

}
