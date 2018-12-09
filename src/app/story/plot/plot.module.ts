import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotPointComponent } from './components/plot-point/plot-point.component';
import { PlotListComponent } from './components/plot-list/plot-list.component';
import { PlotBoxComponent } from './containers/plot-box/plot-box.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PlotService} from './services/plot.service';
import { PlotShedComponent } from './containers/plot-shed/plot-shed.component';
import {RouterModule, Routes} from '@angular/router';
import { PlotNavComponent } from './components/plot-nav/plot-nav.component';
import {SharedModule} from '../shared/shared.module';


export const routes:Routes =[
  {path:'plot',component:PlotShedComponent}
  ]

@NgModule({
  imports: [
    SharedModule,

    RouterModule.forChild(routes)
  ],
  exports:[PlotPointComponent, PlotListComponent, PlotBoxComponent,PlotShedComponent,PlotNavComponent],
  declarations: [PlotPointComponent, PlotListComponent, PlotBoxComponent, PlotShedComponent, PlotNavComponent],
  providers:[PlotService]
})
export class PlotModule { }
