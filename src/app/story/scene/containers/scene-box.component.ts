import {Component, Input, OnInit} from '@angular/core';
import {ILocation, IScene} from '../model/scene';
import {ActivatedRoute, Router} from '@angular/router';
import {StoryService} from '../../services/story.service';
import {IPerson, IStory} from '../../model/story';

@Component({
  selector: 'app-scene-box',
  templateUrl: './scene-box.component.html',
  styleUrls: ['./scene-box.component.css']
})
export class SceneBoxComponent implements OnInit {

  sceneList:IScene[] = null;
  selectedScene:IScene = null;
  showThings:boolean = false;

  constructor(private route:ActivatedRoute, private router:Router, private storyService:StoryService) { }

  ngOnInit() {
    this.storyService.changeNavbarState('scene');
    let story:IStory;
    this.storyService.storiesSourceChanges$.subscribe(
      selectedStory => story = selectedStory
    )
   this.route.params.subscribe(

     params => {
       if(story) {
         this.sceneList = story.scenes;
       }else{
         this.router.navigate(['/story'])
       }
     },


   )
  }


  addScene(){
    let newscene: { id: number; sequence: number; purpose: string; goal: string; start: string; duration: number; unit: string; location: ILocation; people: any; things: any[]; narrative: string };
    newscene = {
      id: 0,
      sequence: 0,
      purpose: '',
      goal: '',
      start: '',
      duration: 0,
      unit: '',
      location:{name:''},
      people:[],
      things: [],
      narrative: ''
    };
    this.sceneList.push(newscene);
    
  }
  saveScene(scene:IScene){
    this.selectedScene = scene;
    this.storyService.saveStories();
  }

  showSelected(scene:IScene){
    this.selectedScene = scene;

  }

  deleteScene(scene:IScene){
    this.sceneList.splice(this.sceneList.indexOf(scene),1);
    this.selectedScene = null;

  }

  addThing(val){

    this.showThings = val;
    if(val) {

      let thing = {
        "id": 0,
        "name": 'name',
        "description": "description",
        "location": "location"
      }
      this.selectedScene.things.push(thing);
    }



  }




}
