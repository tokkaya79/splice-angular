import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsSectionComponent } from './creators-section.component';

describe('CreatorsSectionComponent', () => {
  let component: CreatorsSectionComponent;
  let fixture: ComponentFixture<CreatorsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatorsSectionComponent]
    });
    fixture = TestBed.createComponent(CreatorsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
