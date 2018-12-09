import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitualDomainComponent } from './habitual-domain.component';

describe('HabitualDomainComponent', () => {
  let component: HabitualDomainComponent;
  let fixture: ComponentFixture<HabitualDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitualDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitualDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
