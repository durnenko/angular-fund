import {Routes} from '@angular/router';
import {EventDetailsComponent} from "./events/event-detail/event-details.component";
import {EventsListComponent} from "./events/events-list.component";
import { CreateEventComponent} from './events/create-event.component';
import { Error404Component} from './errors/404.component';
import { EventRouterActivator} from './events/event-detail/event-route-activators.service';

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent,
      canActivate: [EventRouterActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]
