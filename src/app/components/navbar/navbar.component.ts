import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafeLinkDirective } from '../../directives/safe-link.directives';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, SafeLinkDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
