import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGradingComponent } from './open-grading.component';

describe('OpenGradingComponent', () => {
  let component: OpenGradingComponent;
  let fixture: ComponentFixture<OpenGradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenGradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenGradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
