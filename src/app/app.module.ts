import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecruitingModule } from './recruiting/recruiting.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecruitingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
