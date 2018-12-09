import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotBoxComponent } from './plot-box.component';

describe('PlotBoxComponent', () => {
  let component: PlotBoxComponent;
  let fixture: ComponentFixture<PlotBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
