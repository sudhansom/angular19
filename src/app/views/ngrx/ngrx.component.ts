import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-ngrx',
  imports: [ContainerComponent, CounterComponent],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.scss'
})
export class NgrxComponent {

}
