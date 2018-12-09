import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../../services/story.service';

@Component({
  selector: 'app-narrative-box',
  templateUrl: './narrative-box.component.html',
  styleUrls: ['./narrative-box.component.css']
})
export class NarrativeBoxComponent implements OnInit {

  constructor(private storyService:StoryService) { }

  ngOnInit() {
    this.storyService.changeNavbarState('narrative');
    let foo = this.storyService.navBarSourceChanges$.subscribe(
      bar => foo = bar
    )
    console.log("navbar foo",foo);
  }

}
