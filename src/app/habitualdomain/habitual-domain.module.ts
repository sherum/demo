import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitualDomainComponent } from './habitual-domain/habitual-domain.component';
import {Routes} from '@angular/router';


export const routes:Routes =[
  {path:"domain",component:HabitualDomainComponent}
  ]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HabitualDomainComponent]
})
export class HabitualDomainModule { }
