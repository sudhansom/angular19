import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-js-practive',
  imports: [RouterOutlet, ContainerComponent, RouterModule],
  templateUrl: './js-practive.component.html',
  styleUrl: './js-practive.component.scss'
})
export class JsPractiveComponent {

}
