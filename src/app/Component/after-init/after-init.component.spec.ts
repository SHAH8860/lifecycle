import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterInitComponent } from './after-init.component';

describe('AfterInitComponent', () => {
  let component: AfterInitComponent;
  let fixture: ComponentFixture<AfterInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
