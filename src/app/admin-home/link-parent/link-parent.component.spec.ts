import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkParentComponent } from './link-parent.component';

describe('LinkParentComponent', () => {
  let component: LinkParentComponent;
  let fixture: ComponentFixture<LinkParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
