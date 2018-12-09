import { Component, OnInit } from '@angular/core';
import {IThing} from '../../model/thing';
import {ActivatedRoute, Router} from '@angular/router';
import {StoryService} from '../../../services/story.service';
import {IStory} from '../../../model/story';
import {IScene} from '../../../scene/model/scene';


@Component({
  selector: 'app-things-box',
  templateUrl: './thing-box.component.html',
  styleUrls: ['./thing-box.component.css']
})
export class ThingBoxComponent implements OnInit {

  selectedThing:IThing = null;
  thingList:IThing[] = null;

  constructor(private route:ActivatedRoute, private router:Router, private storyService:StoryService) { }

  ngOnInit() {
    this.storyService.changeNavbarState('thing');
    let story:IStory;
    this.storyService.storiesSourceChanges$.subscribe(
      selectedStory => story = selectedStory
    )
    this.route.params.subscribe(

      params => {
        if(story) {
          this.thingList = story.things;
        }else{
          this.router.navigate(['/story'])
        }
      },


    )

  }



  things = [
    {
      id:1,
      name:"John's car",
      description:"1984 Ford Escort sedan. Manual transmission, tan body. 150K miles.",
      location:"John's house."
    },
    {
      id:2,
      name:"April's Necklace",
      description:"A silver heart pendant with pictures of her maternal grandparents",
      location:"April, worn"
    },
    {
      id:3,
      name:"Evidence #1",
      description:"CNT fragments embedded into grooves in the ground.",
      location:"Crash Site #3"
    }

  ]







  showSelected(thing:IThing){
    this.selectedThing = thing;
  }

  saveThing(thing:IThing){
    this.selectedThing = thing;
    this.storyService.saveStories();
  }

  deleteThing(thing:IThing){
    this.thingList.splice(this.thingList.indexOf(thing),1);
    this.selectedThing = null;

  }

  addThing(){
    this.selectedThing = null;
    this.selectedThing = {
      "id":this.things.length +5,
      "name":'name',
      "description":"description",
      "location":"location"
    }
    this.thingList.push(this.selectedThing);
  }

}
