import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeandingComponent } from './leanding.component';

describe('LeandingComponent', () => {
  let component: LeandingComponent;
  let fixture: ComponentFixture<LeandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
