import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog5Component } from './blog5.component';

describe('Blog5Component', () => {
  let component: Blog5Component;
  let fixture: ComponentFixture<Blog5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Blog5Component]
    });
    fixture = TestBed.createComponent(Blog5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
