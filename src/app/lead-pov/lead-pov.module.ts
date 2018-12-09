import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadPovComponent } from './lead-pov/lead-pov.component';
import {RouterModule, Routes} from '@angular/router';


export const routes:Routes =[
  {path:'',component:LeadPovComponent}
  ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [LeadPovComponent],
  exports:[LeadPovComponent],
})
export class LeadPovModule { }
