import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-scene-nav',
  templateUrl: './scene-nav.component.html',
  styleUrls: ['./scene-nav.component.css']
})
export class SceneNavComponent implements OnInit {

  @Output() showhide:EventEmitter<boolean> = new EventEmitter();
  @Output() create:EventEmitter<any> = new EventEmitter();
  @Input() sceneNarrativeToggle:boolean;
  constructor() { }

  ngOnInit() {
  }

  createScene(){
    this.create.emit();
  }

  toggleNarrative(){
    this.showhide.emit();
  }

}
