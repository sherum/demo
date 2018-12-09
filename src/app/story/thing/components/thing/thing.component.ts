import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IThing} from '../../model/thing';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css'],
  animations:[
    trigger('thingTrigger',[
      transition(':enter',[
        style({opacity:0}),
        animate('500ms ease-in',style({opacity:1}))]),
      transition(':leave',[
        animate('500ms ease-out',style({opacity:0}))])
    ])
  ]
})

export class ThingComponent {

  @Input() show:boolean = false;
  @Input() thing:IThing = null;
  @Output() save:EventEmitter<IThing> = new EventEmitter<IThing>();
  @Output() remove:EventEmitter<IThing> = new EventEmitter<IThing>();

  editing:boolean;
  mode = 'Edit';



  editMode(){
    this.editing = !this.editing;
    this.mode = this.editing?'Done':'Edit';
    if(this.mode === 'Done'){
      this.save.emit(this.thing);
    }
  }

  delete(){
    this.remove.emit(this.thing);
  }




}
