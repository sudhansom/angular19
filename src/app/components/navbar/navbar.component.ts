import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafeLinkDirective } from '../../directives/safe-link.directives';
import { MyPipe } from '../../pipes/my-pipe.pipe';

interface Links {
  name: string,
  label: string
}

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, SafeLinkDirective, MyPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() links : Links[];
}
