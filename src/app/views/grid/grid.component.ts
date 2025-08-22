import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-grid',
  imports: [ContainerComponent, RouterLink],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {

}
