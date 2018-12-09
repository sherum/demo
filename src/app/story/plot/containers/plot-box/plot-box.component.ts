import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IPlotLine, IPlotpoint} from '../../model/plotpoint';
import {PlotService} from '../../services/plot.service';
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-plot-box',
  templateUrl: './plot-box.component.html',
  styleUrls: ['./plot-box.component.css'],
  animations:[
    trigger('boxTrigger',[
      transition(':enter',[
        style({opacity:0}),
        animate('500ms ease-in',style({opacity:1}))]),
      transition(':leave',[
        animate('500ms ease-out',style({opacity:0}))])
    ])
  ]
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class PlotBoxComponent{
  selectedPlot:IPlotpoint = null;
  // @Input() pointList:IPlotpoint[];
  @Input() pointList:IPlotLine;

  showSelected(plotpoint:IPlotpoint){
    this.selectedPlot = plotpoint;
  }

  savePlot(plotpoint:IPlotpoint){
    this.selectedPlot = plotpoint;

  }

  deletePlot(plotpoint:IPlotpoint){
    this.selectedPlot = null;
    this.pointList.points.splice(this.pointList.points.indexOf(plotpoint),1);


  }
  newPlot(plot:IPlotpoint){
    let newplot = {
      id:100,
      sequence:plot.sequence+1,
      name:"new name",
      thread:plot.thread,
      follows:plot.sequence,
      description: "new description"
    }
    this.pointList.points.push(newplot);
    this.selectedPlot = newplot;
  }

  // addThread(){
  //   let newthread = {
  //     "id":100,
  //     "sequence":0,
  //     "name":'root name',
  //     "description":"root description",
  //     "follows":0,
  //     "thread":"new thread"
  //   }
  //   this.pointList.push(newthread);
  // }
}
