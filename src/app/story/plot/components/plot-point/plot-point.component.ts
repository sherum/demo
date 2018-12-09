import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {IPlotpoint} from '../../model/plotpoint';


@Component({
  selector: 'app-plot-point',
  templateUrl: './plot-point.component.html',
  styleUrls: ['./plot-point.component.css'],
  animations:[
    trigger('plotTrigger',[
      transition(':enter',[
        style({opacity:0}),
        animate('500ms ease-in',style({opacity:1}))]),
      transition(':leave',[
        animate('500ms ease-out',style({opacity:0}))])
    ])
  ]
})
export class PlotPointComponent {

  @Input() show:boolean = false;
  @Input() point:IPlotpoint = null;

  @Output() save:EventEmitter<IPlotpoint> = new EventEmitter<IPlotpoint>();
  @Output() remove:EventEmitter<IPlotpoint> = new EventEmitter<IPlotpoint>();
  @Output() next:EventEmitter<IPlotpoint> = new EventEmitter<IPlotpoint>();

  editing:boolean;
  mode = 'Edit';

  editMode(){
    this.editing = !this.editing;
    this.mode = this.editing?'Done':'Edit';
    if(this.mode === 'Done'){
      this.save.emit(this.point);
    }
  }

  delete(){
    this.remove.emit(this.point);
  }

  nextPoint(point:IPlotpoint){
    this.next.emit(point);
  }

}
