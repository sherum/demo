import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {NarrativeComponent} from './components/narrative/narrative.component';
import {NarrativeNavComponent} from './components/narrative-nav/narrative-nav.component';
import {NarrativeBoxComponent} from './containers/narrative-box/narrative-box.component';
import {RouterModule, Routes} from '@angular/router';
import {StoryBoxComponent} from '../containers/story-box/story-box.component';
import {StoryListComponent} from '../components/story-list/story-list.component';
import {StoryComponent} from '../components/story/story.component';
import {SceneBoxComponent} from '../scene/containers/scene-box.component';
import {PlotShedComponent} from '../plot/containers/plot-shed/plot-shed.component';
import {ThingBoxComponent} from '../thing/containers/thing-box/thing-box.component';

export const routes:Routes =[
  {path:'story',component:StoryBoxComponent,
    children:[
      { path:'', redirectTo:'list', pathMatch:'full'},
      { path:'list', component:StoryListComponent},
      { path:'detail', component:StoryComponent},
      { path:'scenes', component:SceneBoxComponent},
      { path:'plot', component:PlotShedComponent},
      { path:'narrative', component:NarrativeComponent},
      { path:'drivers', component:ThingBoxComponent}

    ]},



]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[NarrativeComponent,NarrativeNavComponent,NarrativeBoxComponent],
  declarations: [NarrativeComponent,NarrativeNavComponent,NarrativeBoxComponent]
})
export class NarrativeModule { }
