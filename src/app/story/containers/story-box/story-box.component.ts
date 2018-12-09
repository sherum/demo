import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IStory} from '../../model/story';
import {StoryService} from '../../services/story.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-story-box',
  templateUrl: './story-box.component.html',
  styleUrls: ['./story-box.component.css']
})
export class StoryBoxComponent implements OnInit {

  storyList:IStory[];
  selectedStory:IStory = null;
  navbar:string = 'story'



  constructor(private  storyService:StoryService,private router:Router) { }

  ngOnInit() {
    this.storyService.changeNavbarState('story');
    this.storyList = this.storyService.getStories();
    this.storyService.storiesSourceChanges$.subscribe(
      selectedStory => this.selectedStory = selectedStory
    )

    this.storyService.navBarSourceChanges$.subscribe(
      state => this.navbar = state
    )
  }

  showSelected(story:IStory){


  }





  saveStory(){
    console.log("Saved Story",this.selectedStory);
    this.storyService.saveStories();

  }

  addStory(){
    console.log("Hey new story");

    this.storyService.newStory();
    // let ns:IStory = {
    //   id:0,
    //   author:"",
    //   title:"",
    //   suppose:'',
    //   whatif:'',
    //   maguffin:"",
    //   leadPov:' ',
    //   scenes:[],
    //   plotPoints:[],
    //   people:[],
    //   things:[],
    //   events:[],
    //   locations:[]
    // }
    // this.storyList.push(ns);
    // this.selectedStory = ns;

    console.log("Current Story",this.selectedStory);

  }

  create(itemType:string){
    switch (itemType) {
      case 'story':
       this.storyService.newStory();
        break;
      case 'scene':
        this.storyService.newScene();
        break;
      case 'plot':
        this.storyService.newPlotline();
        break;
      case 'narrative':
        this.storyService.newScene();
        this.router.navigate(['/story/scenes'])
        break;
      case 'thing':
        this.storyService.newThing();
        break;

    }


  }


}
