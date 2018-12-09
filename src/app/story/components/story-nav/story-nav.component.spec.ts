import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryNavComponent } from './story-nav.component';

describe('StoryNavComponent', () => {
  let component: StoryNavComponent;
  let fixture: ComponentFixture<StoryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
