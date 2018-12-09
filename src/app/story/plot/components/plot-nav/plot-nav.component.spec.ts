import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotNavComponent } from './plot-nav.component';

describe('PlotNavComponent', () => {
  let component: PlotNavComponent;
  let fixture: ComponentFixture<PlotNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
