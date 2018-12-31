import {Component, Input, OnInit} from '@angular/core';
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
  @Input() thingList:IThing[] = null;

  constructor(private route:ActivatedRoute, private router:Router, private storyService:StoryService) { }

  ngOnInit() {}

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

      "name":'name',
      "description":"description",
      "location":"location"
    }
    this.thingList.push(this.selectedThing);
  }

}
