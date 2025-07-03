import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ContainerComponent } from '../../components/container/container.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-observables',
  imports: [ContainerComponent, AsyncPipe],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent {
  name$ = new Subject();
  counter$ = new Subject();

  createObservable(){
    const observable$ = new Observable(observer => {
      observer.next('sudhan');
      setTimeout(()=>{
        observer.next('Resham')
      }, 2000)
      setTimeout(()=>{
        observer.next('Biren')
      }, 4000)
    })
    observable$.subscribe(value => {
      this.name$.next(value);
    });
  }

  tearDown(){
    const observable$ = new Observable(subscriber => {
      let counter = 0;
      const interval = setInterval(()=>{
        console.log('Counting: '+counter)
        subscriber.next(counter++);
      }, 1000)

      return () => {
        clearInterval(interval);
      }
    })

    const subs = observable$.subscribe(value => {
      this.counter$.next(value);
    });

    setTimeout(() => {
      subs.unsubscribe();
    }, 10000);
  }
}
