import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[CommonModule,FormsModule,
    BrowserAnimationsModule],
  declarations: []
})
export class SharedModule { }
