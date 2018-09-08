import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsIndexComponent } from './cars-index.component';

describe('CarsIndexComponent', () => {
  let component: CarsIndexComponent;
  let fixture: ComponentFixture<CarsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
