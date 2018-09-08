import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaysIndexComponent } from './plays-index.component';

describe('PlaysIndexComponent', () => {
  let component: PlaysIndexComponent;
  let fixture: ComponentFixture<PlaysIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaysIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaysIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
