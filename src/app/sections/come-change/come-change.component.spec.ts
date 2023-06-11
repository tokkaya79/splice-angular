import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeChangeComponent } from './come-change.component';

describe('ComeChangeComponent', () => {
  let component: ComeChangeComponent;
  let fixture: ComponentFixture<ComeChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComeChangeComponent]
    });
    fixture = TestBed.createComponent(ComeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
