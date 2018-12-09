import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotShedComponent } from './plot-shed.component';

describe('PlotShedComponent', () => {
  let component: PlotShedComponent;
  let fixture: ComponentFixture<PlotShedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotShedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotShedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
