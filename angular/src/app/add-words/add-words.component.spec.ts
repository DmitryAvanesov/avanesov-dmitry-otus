import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordsComponent } from './add-words.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddWordsComponent', () => {
  let component: AddWordsComponent;
  let fixture: ComponentFixture<AddWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddWordsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
