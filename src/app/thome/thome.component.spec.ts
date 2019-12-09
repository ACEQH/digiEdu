import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { THomeComponent } from './thome.component';

describe('THomeComponent', () => {
  let component: THomeComponent;
  let fixture: ComponentFixture<THomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ THomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(THomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
