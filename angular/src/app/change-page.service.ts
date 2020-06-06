import { Injectable } from '@angular/core';
import { Subject, Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePageService {

  private pageChangedSource: Subject<string>;
  pageChanged: Observable<string>;

  constructor() {
    this.pageChangedSource = new Subject<string>();
    this.pageChanged = this.pageChangedSource.asObservable();
  }

  changePage(newPage: string) {
    this.pageChangedSource.next(newPage);
  }

}
