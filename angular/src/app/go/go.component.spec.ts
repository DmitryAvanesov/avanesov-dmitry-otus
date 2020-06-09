import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoComponent } from './go.component';

describe('GoComponent', () => {
  let component: GoComponent;
  let fixture: ComponentFixture<GoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set correct current date', () => {
    component.getRandom();
    expect(component.currentDate).toMatch('(\\d{2}.){2}\\d{4}');
  });

  it('should set correct current word', () => {
    component.getRandom();
    expect(component.currentWord).toMatch('\\w+');
  });

  it('should detect right translations', () => {
    component.data[component.currentDate][component.currentWord][component.language] = 'test';
    component.currentTranslation = 'test';
    component.currentNumber = 0;
    component.checkTranslation();

    expect(component.answers[0]).toBeTrue();
  });
});
