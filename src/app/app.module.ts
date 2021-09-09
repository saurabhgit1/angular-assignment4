import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './input/input.component'
import { ReactiveFormsModule } from '@angular/forms';
import { Display2Component } from './display2/display2.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    InputComponent,
    Display2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
