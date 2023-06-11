import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsGoodItemComponent } from './as-good-item.component';

describe('AsGoodItemComponent', () => {
  let component: AsGoodItemComponent;
  let fixture: ComponentFixture<AsGoodItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsGoodItemComponent]
    });
    fixture = TestBed.createComponent(AsGoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
