import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPlotLine, IPlotpoint} from '../../model/plotpoint';
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-plot-list',
  templateUrl: './plot-list.component.html',
  styleUrls: ['./plot-list.component.css'],
  animations:[
    trigger('listTrigger',[
      transition(':enter',[
        style({opacity:0}),
        animate('500ms ease-in',style({opacity:1}))]),
      transition(':leave',[
        animate('500ms ease-out',style({opacity:0}))])
    ])

  ]
})
export class PlotListComponent  {

  // @Input() pointList:IPlotpoint[];
  @Input() pointList:IPlotLine;

  @Output() selectedPoint: EventEmitter<IPlotpoint> = new EventEmitter<IPlotpoint>();

  currentPlot:IPlotpoint;


  select(point:IPlotpoint){
    this.selectedPoint.emit(point);
    this.currentPlot = point;
  }
}
