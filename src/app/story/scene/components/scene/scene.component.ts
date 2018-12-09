import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IScene} from '../../model/scene';
import {FormControl} from '@angular/forms';
import {animate, style, transition, trigger} from '@angular/animations';


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
  
  @Input() show:boolean = false;
  @Input() scene:IScene = null;

  @Output() save:EventEmitter<IScene> = new EventEmitter<IScene>();
  @Output() remove:EventEmitter<IScene> = new EventEmitter<IScene>();

  purposeControl:FormControl;
  narrativeControl:FormControl;



  saveScene(){
    this.save.emit(this.scene);
  }

  deleteScene(scene){
    this.remove.emit(scene);
  }




}
