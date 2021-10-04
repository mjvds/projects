import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonDirective, RadioButtonsComponent } from './radio-buttons';

const COMPONENT = [
  RadioButtonsComponent,
  RadioButtonDirective
];

@NgModule({
  declarations: COMPONENT,
  exports: COMPONENT,
  imports: [
    CommonModule
  ]
})
export class RadioButtonsModule { }
