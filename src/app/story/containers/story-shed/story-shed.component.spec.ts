import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryShedComponent } from './story-shed.component';

describe('StoryShedComponent', () => {
  let component: StoryShedComponent;
  let fixture: ComponentFixture<StoryShedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryShedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryShedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
