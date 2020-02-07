import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundamentals';
}
