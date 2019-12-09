import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationTComponent } from './communication-t.component';

describe('CommunicationTComponent', () => {
  let component: CommunicationTComponent;
  let fixture: ComponentFixture<CommunicationTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
