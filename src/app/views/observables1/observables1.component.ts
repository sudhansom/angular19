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
  combined = "";
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

 combineLatest(){
  const obs1$ = new Observable(subscriber => {
    subscriber.next(0);
    setTimeout(()=>{
      subscriber.next(4);
    }, 2000)
  })
  const obs2$ = new Observable(subscriber => {
    subscriber.next(1);
    setTimeout(()=>{
      subscriber.next(9);
    }, 3000)
  })

  combineLatest([obs1$, obs2$]).subscribe(([val1, val2])=>{
    console.log(val1, val2)
    this.combined = `value1: ${val1} value2: ${val2}.`
  });
 }
}
