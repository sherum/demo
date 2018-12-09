import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneBoxComponent } from './scene-box.component';

describe('SceneBoxComponent', () => {
  let component: SceneBoxComponent;
  let fixture: ComponentFixture<SceneBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
