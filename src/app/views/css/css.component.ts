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

}
