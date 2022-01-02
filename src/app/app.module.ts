import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import { DynamicDirective } from './directives/dynamic.directive';
import { TestDirective } from './directives/test.directive';
import TextWithHerePipe from './pipes/text-with-here.pipe';

@NgModule({
  declarations: [AppComponent, TestComponent, TextWithHerePipe, TestDirective, DynamicDirective],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
