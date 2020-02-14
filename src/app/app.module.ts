import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {EventsListComponent} from "./events/events-list.component";
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from "./nav/navbar.component";

import {EventService} from "./events/shared/event.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailsComponent} from "./events/event-detail/event-details.component";
import {appRoutes} from './routes';
import { CreateEventComponent} from './events/create-event.component';
import { Error404Component} from './errors/404.component';
import { EventRouterActivator} from './events/event-detail/event-route-activators.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouterActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
