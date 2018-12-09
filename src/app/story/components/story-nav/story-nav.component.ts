import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStory} from '../../model/story';
import {StoryService} from '../../services/story.service';


@Component({
  selector: 'app-story-nav',
  templateUrl: './story-nav.component.html',
  styleUrls: ['./story-nav.component.css']
})
export class StoryNavComponent implements OnInit{



  @Input() story:IStory = null;
  bartype:string = null;
  @Output() create:EventEmitter<any> = new EventEmitter();
  @Output() save:EventEmitter<any> = new EventEmitter();
  @Output() update:EventEmitter<any> = new EventEmitter<any>();

  currentStory:IStory;
  constructor(private storyService:StoryService){}

  ngOnInit() {
   this.storyService.storiesSourceChanges$.subscribe(
      selectedStory => this.currentStory = selectedStory
    )

    this.storyService.navBarSourceChanges$.subscribe(
      state => this.bartype = state
    )
  }



  creates(){
    this.create.emit(this.bartype);
  }

  saveStory(){
    this.save.emit();
  }

  confirmDelete(){
    this.update.emit();
  }


}
