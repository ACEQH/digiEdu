import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMangementComponent } from './register-mangement.component';

describe('RegisterMangementComponent', () => {
  let component: RegisterMangementComponent;
  let fixture: ComponentFixture<RegisterMangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
