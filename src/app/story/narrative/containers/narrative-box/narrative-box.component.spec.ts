import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrativeBoxComponent } from './narrative-box.component';

describe('NarrativeBoxComponent', () => {
  let component: NarrativeBoxComponent;
  let fixture: ComponentFixture<NarrativeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrativeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarrativeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
