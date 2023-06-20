import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnYacorComponent } from './btn-yacor.component';

describe('BtnYacorComponent', () => {
  let component: BtnYacorComponent;
  let fixture: ComponentFixture<BtnYacorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnYacorComponent]
    });
    fixture = TestBed.createComponent(BtnYacorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
