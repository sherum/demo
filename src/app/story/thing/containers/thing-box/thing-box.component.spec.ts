import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingBoxComponent } from './thing-box.component';

describe('ThingBoxComponent', () => {
  let component: ThingBoxComponent;
  let fixture: ComponentFixture<ThingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
