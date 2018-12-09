import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStory} from '../../model/story';
import {StoryService} from '../../services/story.service';
import {ActivatedRoute, Router} from '@angular/router';
import {relativeToRootDirs} from '@angular/compiler-cli/src/transformers/util';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css'],
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
export class StoryListComponent implements OnInit{

  @Input() storyList:IStory[];

  @Output() createStory:EventEmitter<any> = new EventEmitter();

  currentStory:IStory =null;


  constructor(private storyService:StoryService,
              private route:ActivatedRoute,
              private router:Router){}

  ngOnInit() {
    this.storyService.changeNavbarState('story');
    this.storyList = this.storyService.getStories();
    this.storyService.storiesSourceChanges$.subscribe(
      selectedStory => this.currentStory = selectedStory
    )
  }


  select(story:IStory){
    console.log("Currently emitted story",story);
    this.storyService.changeSelectedStory(story);
    this.currentStory  = story;
    console.log("tStopry List ONE",this.currentStory);
    this.router.navigate(['story/detail']);
    console.log("tStopry List TWO",this.currentStory);

  }

  newStory(){
    this.createStory.emit();
  }

  deleteStory(story:IStory){
    this.storyService.changeSelectedStory(story);
    this.storyService.removeStory(this.currentStory);
    this.currentStory = null;
  }


}
