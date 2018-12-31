import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from '../../core/core.module';




@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[CommonModule,FormsModule,
    BrowserAnimationsModule, CoreModule],
  declarations: []
})
export class SharedModule { }
