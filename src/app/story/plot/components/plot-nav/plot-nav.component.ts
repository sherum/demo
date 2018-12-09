import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-plot-nav',
  templateUrl: './plot-nav.component.html',
  styleUrls: ['./plot-nav.component.css']
})
export class PlotNavComponent  {



  @Output() create:EventEmitter<any> = new EventEmitter();
  @Output() save:EventEmitter<any> = new EventEmitter();


  createPlot(){
    this.create.emit();
  }

  savePlot(){
    this.save.emit();
  }
}
