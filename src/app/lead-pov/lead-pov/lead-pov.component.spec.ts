import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadPovComponent } from './lead-pov.component';

describe('LeadPovComponent', () => {
  let component: LeadPovComponent;
  let fixture: ComponentFixture<LeadPovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadPovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadPovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
