import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationSComponent } from './communication-s.component';

describe('CommunicationSComponent', () => {
  let component: CommunicationSComponent;
  let fixture: ComponentFixture<CommunicationSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
