import {Routes} from '@angular/router';
import {
  EventDetailsComponent,
  EventsListComponent,
  CreateEventComponent,
  EventRouterActivator,
  EventListResolver,
  CreateSessionComponent
} from './events/index'
import { Error404Component} from './errors/404.component';

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent,
      canActivate: [EventRouterActivator]},
    {path:'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren:'./user/user.module#UserModule'}
]
