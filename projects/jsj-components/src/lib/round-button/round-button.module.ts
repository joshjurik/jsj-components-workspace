import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoundButtonComponent } from './round-button.component';


@NgModule({
  declarations: [
    RoundButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoundButtonComponent
  ]
})
export class RoundButtonModule { }
