import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotPointComponent } from './plot-point.component';

describe('PlotPointComponent', () => {
  let component: PlotPointComponent;
  let fixture: ComponentFixture<PlotPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
