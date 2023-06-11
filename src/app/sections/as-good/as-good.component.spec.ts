import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsGoodComponent } from './as-good.component';

describe('AsGoodComponent', () => {
  let component: AsGoodComponent;
  let fixture: ComponentFixture<AsGoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsGoodComponent]
    });
    fixture = TestBed.createComponent(AsGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
