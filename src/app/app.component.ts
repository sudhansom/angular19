import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorsService } from './services/auth-interceptors.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorsService, multi: true}]
})
export class AppComponent {
  title = 'task-management';
  lists = [
    {
      name: '/',
      label: 'home'
    },
    {
      name: '/t-register',
      label: 't-form'
    },
    {
      name: '/r-register',
      label: 'r-form'
    },
    {
      name: '/budget',
      label: 'budget'
    },
    {
      name: '/separation',
      label: 'separation'
    },
    {
      name: '/rxjs',
      label: 'rxjs'
    },
    {
      name: '/grid',
      label: 'grid'
    },
    {
      name: '/css-before',
      label: 'before'
    },
    {
      name: '/grid-only',
      label: 'grid-only'
    },
    {
      name: '/sitemule',
      label: 'sitemule'
    },
    {
      name: '/js-practice',
      label: 'js-practice'
    },
    {
      name: '/css-only',
      label: 'CSS'
    },
    {
      name: '/ngrx',
      label: 'Ngrx'
    },
    {
      name: '/c-flow',
      label: 'C-Flow'
    },
    {
      name: '/observables',
      label: 'Observables'
    },
    {
      name: '/signals',
      label: 'Signals'
    },
    {
      name: '/subjects',
      label: 'Subjects'
    },
    {
      name: '/hooks',
      label: 'Hooks'
    },
]
}
