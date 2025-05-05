import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
  }
  title = 'cmms2.0';

  public menuItems: MenuItem[] = appRoutes.filter((r) => r.path).map((r) => {return { text: r.title, routeLink: r.path }}) as MenuItem[];
}

export interface MenuItem {
  text: string;
  routeLink: string;
}
