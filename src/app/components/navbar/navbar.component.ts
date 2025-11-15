import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


interface Links {
  name: string,
  label: string
}

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() links : Links[];
}
