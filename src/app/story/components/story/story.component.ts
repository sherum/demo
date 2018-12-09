import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IStory} from '../../model/story';
import {IPlotLine, IPlotpoint} from '../../plot/model/plotpoint';
import {IScene} from '../../scene/model/scene';
import {StoryService} from '../../services/story.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  animations:[
    trigger('storyTrigger',[
      transition(':enter',[
        style({opacity:0}),
        animate('500ms ease-in',style({opacity:1}))]),
      transition(':leave',[
        animate('500ms ease-out',style({opacity:0}))])
    ])
  ]
})
export class StoryComponent implements OnInit {

   story: IStory;
  show: boolean;
  save: EventEmitter<IStory> = new EventEmitter<IStory>();


  constructor(private  storyService: StoryService) {
  }

  ngOnInit() {
    this.storyService.storiesSourceChanges$.subscribe(
      selectedStory => this.story = selectedStory
    );
  }


  // get plotList():IPlotLine {
  //   return this.story.plotPoints;
  // }
  //
  // set plotList(plots) {
  //   this.story.plotPoints = plots;
  // }

  scene: boolean = false;
  plot: boolean = false;


  saveStory() {
    this.storyService.saveStories();
  }
}
