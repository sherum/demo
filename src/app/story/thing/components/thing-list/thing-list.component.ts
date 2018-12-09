
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IThing} from '../../model/thing';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-thing-list',
  templateUrl: './thing-list.component.html',
  styleUrls: ['./thing-list.component.css'],
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
export class ThingListComponent  {

  @Input() thingList:IThing[];

  @Output() selectedThing: EventEmitter<IThing> = new EventEmitter<IThing>();



  select(thing:IThing){
    this.selectedThing.emit(thing);
  }

}
