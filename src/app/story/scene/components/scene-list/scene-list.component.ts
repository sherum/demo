import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IScene} from '../../model/scene';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-scene-list',
  templateUrl: './scene-list.component.html',
  styleUrls: ['./scene-list.component.css'],
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
export class SceneListComponent {

  @Input() sceneList:IScene[];

  @Output() selectedScene: EventEmitter<IScene> = new EventEmitter<IScene>();
  @Output() deleteScene: EventEmitter<IScene> = new EventEmitter<IScene>();


  currentScene:IScene = null;
  select(scene:IScene){
    this.selectedScene.emit(scene);
    this.currentScene = scene;
  }

  delete(scene){
    this.deleteScene.emit(scene);

  }
}
