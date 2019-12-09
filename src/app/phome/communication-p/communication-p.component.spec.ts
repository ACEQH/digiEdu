import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationPComponent } from './communication-p.component';

describe('CommunicationPComponent', () => {
  let component: CommunicationPComponent;
  let fixture: ComponentFixture<CommunicationPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
