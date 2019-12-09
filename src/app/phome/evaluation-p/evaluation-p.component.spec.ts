import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPComponent } from './evaluation-p.component';

describe('EvaluationPComponent', () => {
  let component: EvaluationPComponent;
  let fixture: ComponentFixture<EvaluationPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
