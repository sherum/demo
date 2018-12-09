import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrativeNavComponent } from './narrative-nav.component';

describe('NarrativeNavComponent', () => {
  let component: NarrativeNavComponent;
  let fixture: ComponentFixture<NarrativeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrativeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarrativeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
