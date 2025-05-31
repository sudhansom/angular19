import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
      name: '/sitemule',
      label: 'sitemule'
    }
]
}
