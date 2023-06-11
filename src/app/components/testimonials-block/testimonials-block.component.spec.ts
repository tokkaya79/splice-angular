import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsBlockComponent } from './testimonials-block.component';

describe('TestimonialsBlockComponent', () => {
  let component: TestimonialsBlockComponent;
  let fixture: ComponentFixture<TestimonialsBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialsBlockComponent]
    });
    fixture = TestBed.createComponent(TestimonialsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
