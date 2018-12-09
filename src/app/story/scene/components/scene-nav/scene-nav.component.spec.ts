import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneNavComponent } from './scene-nav.component';

describe('SceneNavComponent', () => {
  let component: SceneNavComponent;
  let fixture: ComponentFixture<SceneNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
