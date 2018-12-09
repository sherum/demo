import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlotLine, IPlotpoint} from '../../model/plotpoint';
import {PlotService} from '../../services/plot.service';
import {StoryService} from '../../../services/story.service';
import {IStory} from '../../../model/story';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-plot-shed',
  templateUrl: './plot-shed.component.html',
  styleUrls: ['./plot-shed.component.css']
})
export class PlotShedComponent implements OnInit {


  plotWeb:IPlotLine[] = null;
  // selectedPlotLine:IPlotpoint[] = null;
  selectedPlotLine:IPlotLine = null;
  currentPlots:IPlotLine = null;

  editName:boolean = false;


  constructor(private route:ActivatedRoute,
              private router:Router,
              private storyService:StoryService,
              private plotService:PlotService) { }

  ngOnInit() {
    this.storyService.changeNavbarState('plot');
    let story:IStory;
    this.storyService.storiesSourceChanges$.subscribe(
      selectedStory => story = selectedStory

    )
    this.route.params.subscribe(

      params => {
        if (story) {
          this.plotWeb = story.plotPoints;
        }else{
          this.router.navigate(['/story'])
        }
      }
    )
}


  addThread(){
    console.log("New Thread was clicked");
    let newplotline = this.plotService.generateNewPlotLine(this.plotWeb);
    this.selectedPlotLine = newplotline;
    this.plotWeb.push(newplotline);


//     let newplotLine:IPlotpoint[] = [];
//     let plotPoint:IPlotpoint = {
//       "id":this.plotService.generateId(newplotLine),
//       "sequence":null,
//       "name":'new',
//       "description":"",
//       "follows":null,
//       "thread":"new"
//     }
//     newplotLine.push(plotPoint);

//
// console.log("Plotline",newplotLine);
//     console.log("Plotpoint",plotPoint);

  }

  select(plotline:IPlotLine){
    this.selectedPlotLine = plotline;
    this.currentPlots = plotline;
  }

  delete(plot){
  this.plotWeb.splice(this.plotWeb.indexOf(plot),1);
  }

  edit(){
    this.editName = !this.editName;
  }

  savePlot(){
    this.storyService.saveStories();
  }




}











