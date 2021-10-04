import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DebounceDirective } from './directives/debounce.directive';
import { OutputComponent } from '@de/components/output/output.component';
import { RadioButtonsModule } from '@widgets/radio-buttons';

@NgModule({
  declarations: [
    AppComponent,
    DebounceDirective,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RadioButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
