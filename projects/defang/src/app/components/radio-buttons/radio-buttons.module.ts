import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonDirective, RadioButtonsComponent } from './radio-buttons.component';

const COMPONENT = [
  RadioButtonsComponent,
  RadioButtonDirective
]

@NgModule({
  declarations: COMPONENT,
  exports: COMPONENT,
  imports: [
    CommonModule
  ]
})
export class RadioButtonsModule { }
