import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedComponent } from './recently-added.component';

describe('RecentlyAddedComponent', () => {
  let component: RecentlyAddedComponent;
  let fixture: ComponentFixture<RecentlyAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct dates', () => {
    expect(component.dates[Math.floor(Math.random() * component.dates.length)].toString().split('.')).toMatch('(\\d{2}.){2}\\d{4}');
  });

  it('should return words by date', () => {
    expect(component.getWords(Object.keys(component.data)[Math.floor(Math.random() * Object.keys(component.data).length)])).toMatch('\\w+');
  });
});
