import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IScene} from '../../model/scene';
import {FormControl} from '@angular/forms';
import {animate, style, transition, trigger} from '@angular/animations';
import {IThing} from '../../../thing/model/thing';


@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css'],

  animations:[
    trigger('sceneTrigger',[
      transition(':enter',[
        style({opacity:0}),
        animate('500ms ease-in',style({opacity:1}))]),
      transition(':leave',[
        animate('500ms ease-out',style({opacity:0}))])
    ])
  ]
})
export class SceneComponent {

  @Input() show: boolean = false;
  @Input() scene: IScene = null;
   showThingButton: boolean = true;
  @Output() save: EventEmitter<IScene> = new EventEmitter<IScene>();
  @Output() remove: EventEmitter<IScene> = new EventEmitter<IScene>();
  @Output() newthing: EventEmitter<boolean> = new EventEmitter<boolean>();


  purposeControl: FormControl;
  narrativeControl: FormControl;


  saveScene() {
    this.save.emit(this.scene);
  }

  deleteScene(scene) {
    this.remove.emit(scene);
  }


  addThing(val:boolean) {
    this.showThingButton = !this.showThingButton;
    this.newthing.emit(val);
  }
}
