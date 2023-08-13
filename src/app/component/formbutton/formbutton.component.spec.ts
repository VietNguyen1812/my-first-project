import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuttonComponent } from './formbutton.component';

describe('FormbuttonComponent', () => {
  let component: FormbuttonComponent;
  let fixture: ComponentFixture<FormbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormbuttonComponent]
    });
    fixture = TestBed.createComponent(FormbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
