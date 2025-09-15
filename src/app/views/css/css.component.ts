import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ShowMeDirective } from '../../directives/show-me.directive';

@Component({
  selector: 'app-css',
  imports: [ContainerComponent, ShowMeDirective],
  templateUrl: './css.component.html',
  styleUrl: './css.component.scss'
})
export class CssComponent {
  myList = [1,2,3,4,5,6,7,8,9,10,11,12];

}
