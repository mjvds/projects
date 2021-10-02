import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DebounceDirective } from './debounce.directive';
import { OutputComponent } from './output/output.component';
import { MenuComponent } from './menu/menu.component';
import { RadioButtonsModule } from './radio-buttons/radio-buttons.module';

@NgModule({
  declarations: [
    AppComponent,
    DebounceDirective,
    OutputComponent,
    MenuComponent,
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
