import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationSComponent } from './evaluation-s.component';

describe('EvaluationSComponent', () => {
  let component: EvaluationSComponent;
  let fixture: ComponentFixture<EvaluationSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
