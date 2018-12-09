import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IScene} from '../../../scene/model/scene';
import {StoryService} from '../../../services/story.service';
import {IStory} from '../../../model/story';
import {ActivatedRoute, ActivationEnd} from '@angular/router';

@Component({
  selector: 'app-narrative',
  templateUrl: './narrative.component.html',
  styleUrls: ['./narrative.component.css']
})
export class NarrativeComponent implements OnInit {

  narrativeList: IScene[] = null;

  @Input() showNarrative:boolean;
  @Output() toggle:EventEmitter<boolean> = new EventEmitter();

   constructor(private route: ActivatedRoute, private storyService: StoryService) {}


  ngOnInit() {
     this.storyService.changeNavbarState("narrative");
    this.storyService.storiesSourceChanges$.subscribe(
      selectedStory => this.narrativeList = selectedStory.scenes
    )

  }


}


