import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables1',
  imports: [ContainerComponent],
  templateUrl: './observables1.component.html',
  styleUrl: './observables1.component.scss'
})
export class Observables1Component {
 observable(){
  const observable$ = new Observable(subscriber => {
    subscriber.next(1);
  })
  observable$.subscribe(console.log)
 }
}
