import { NgModule } from '@angular/core';

import { SceneComponent } from './components/scene/scene.component';
import { SceneListComponent } from './components/scene-list/scene-list.component';
import { SceneBoxComponent } from './containers/scene-box.component';
import {NarrativeComponent} from '../narrative/components/narrative/narrative.component';
import {RouterModule, Routes} from '@angular/router';
import { SceneNavComponent } from './components/scene-nav/scene-nav.component';
import {TextareaExpandedComponent,EPANDED_TEXTAREA_VALUE_ACCESSOR} from './components/textarea-expanded/textarea-expanded.component';
import {SharedModule} from '../shared/shared.module';



export const routes:Routes =[
  {path:'scenes', component:SceneBoxComponent},
  {path:'narrative', component:NarrativeComponent}
  ]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SceneComponent, SceneListComponent, SceneBoxComponent,  SceneNavComponent,TextareaExpandedComponent],
  exports:[SceneComponent, SceneListComponent, SceneBoxComponent,TextareaExpandedComponent],
  providers:[EPANDED_TEXTAREA_VALUE_ACCESSOR]
})
export class SceneModule { }
