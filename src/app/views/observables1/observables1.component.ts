import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { Observable, combineLatest, fromEvent } from 'rxjs';

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
    let count = 1;
    const interval = setInterval(()=>{
      console.log('first');

      subscriber.next(count++);
    }, 200)
    return(()=>{
      clearInterval(interval);
      console.log("Cleaned up everything...");
    })
  })
  const subs = observable$.subscribe(console.log)

  subs.unsubscribe();
 }

 conbineLatest(){
  const obs1$ = fromEvent(document, 'click');
  const obs2$ = fromEvent(document, 'click');
  combineLatest([obs1$, obs2$]).subscribe(console.log);
 }
}
