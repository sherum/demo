import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryListComponent } from './components/story-list/story-list.component';
import { StoryComponent } from './components/story/story.component';
import {PlotModule} from './plot/plot.module';
import {SceneModule} from './scene/scene.module';
import {ThingModule} from './thing/thing.module';
import {StoryBoxComponent} from './containers/story-box/story-box.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SceneBoxComponent} from './scene/containers/scene-box.component';
import {PlotShedComponent} from './plot/containers/plot-shed/plot-shed.component';

import { StoryNavComponent } from './components/story-nav/story-nav.component';
import { StoryShedComponent } from './containers/story-shed/story-shed.component';
import {NarrativeComponent} from './narrative/components/narrative/narrative.component';
import {ThingBoxComponent} from './thing/containers/thing-box/thing-box.component';
import { NarrativeModule } from './narrative/narrative.module';
import {SharedModule} from './shared/shared.module';
import {NarrativeBoxComponent} from './narrative/containers/narrative-box/narrative-box.component';
import {HttpClientModule} from '@angular/common/http';



export const routes:Routes =[
  {path:'story',component:StoryBoxComponent,
  children:[
     { path:'', redirectTo:'list', pathMatch:'full'},
    { path:'list', component:StoryListComponent},
    { path:'detail', component:StoryComponent},
    { path:'scenes', component:SceneBoxComponent},
    { path:'plot', component:PlotShedComponent},
    { path:'narrative', component:NarrativeBoxComponent},
    { path:'drivers', component:ThingBoxComponent}

  ]},



]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    PlotModule,
    SceneModule,
    ThingModule,
    FormsModule,
    NarrativeModule,
    SharedModule,
    HttpClientModule,



  ],
  declarations: [StoryBoxComponent, StoryListComponent, StoryComponent, StoryNavComponent, StoryShedComponent],
  exports:[StoryBoxComponent, StoryListComponent, StoryComponent,StoryNavComponent,StoryShedComponent]
})
export class StoryModule { }
