import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingListComponent } from './components/thing-list/thing-list.component';
import { ThingComponent } from './components/thing/thing.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ThingBoxComponent} from './containers/thing-box/thing-box.component';
import {SharedModule} from '../shared/shared.module';
import {ThingNavComponent} from './components/thing-nav/thing-nav.component';
import {RouterModule, Routes} from '@angular/router';
import {SceneBoxComponent} from '../scene/containers/scene-box.component';
import {NarrativeComponent} from '../narrative/components/narrative/narrative.component';

export const routes:Routes =[
  // {path:'scenes', component:SceneBoxComponent},
  // {path:'narrative', component:NarrativeComponent}
]
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)

  ],
  exports:[ThingComponent,ThingListComponent,ThingBoxComponent,ThingNavComponent],
  declarations: [ThingListComponent, ThingComponent, ThingBoxComponent,ThingNavComponent]
})
export class ThingModule { }
