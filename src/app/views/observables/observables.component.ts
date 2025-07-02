import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-observables',
  imports: [ContainerComponent],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent {
  createObservable(){
    const observable$ = new Observable(observer => {
      observer.next('sudhan');
      observer.next('Resham');
      setTimeout(()=>{
        observer.next('Biren')
      }, 5000)
    })
    observable$.subscribe(console.log);
  }
}
