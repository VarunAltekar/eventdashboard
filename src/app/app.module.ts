import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventThumbnail } from './event.thumbnail.component';
import { EventListComponent } from './eventlist.component';

@NgModule({
  declarations: [
    AppComponent, EventListComponent, EventThumbnail
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
