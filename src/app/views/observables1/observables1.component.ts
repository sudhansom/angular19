import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { Observable, combineLatest, concat, concatMap, filter, fromEvent, map, mergeMap, of, shareReplay } from 'rxjs';

import { createHttpObservable } from './util'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

type Course = {
  id: number,
  title: string,
  level: string
}

@Component({
  selector: 'app-observables1',
  imports: [ContainerComponent, ReactiveFormsModule],
  templateUrl: './observables1.component.html',
  styleUrl: './observables1.component.scss'
})
export class Observables1Component implements OnInit {
  combined = "";
  toggle = false;
  form: FormGroup;
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
 ngOnInit(){
  // const clickEvent = fromEvent(document, 'click');

  // clickEvent.subscribe(abc => {
  //   console.log('abc', abc.isTrusted);
  // })
  this.form = new FormGroup({
    'title': new FormControl(null),
    'level': new FormControl(null)
  })

  const saveChanges$ = this.form.valueChanges;
  saveChanges$.pipe(
    filter(()=> this.form.valid),
    // concatMap(changes => this.saveChanges(changes))).subscribe(data => console.log(data)
    mergeMap(changes => this.saveChanges(changes))).subscribe(data => console.log(data)

    );


  // this.form.valueChanges.subscribe(data => {
  //   console.log(data);
  // })

 }

 createObservable(){
  const http$ = createHttpObservable('http://localhost:3000/courses');

  const courses$ = http$.pipe(
    map(response => Object.values(response['payload'])),
    shareReplay(),
    );

  const beginner$ = courses$.pipe(
    map((course: Course[] )=> course.filter(course => course.level === 'beginner'))
    );

  const advanced$ = courses$.pipe(
    map((course: Course[] )=> course.filter(course => course.level === 'advanced'))
    );

    advanced$.subscribe(data => console.log(data));


  beginner$.subscribe({
    next: (data)=>{
      console.log(data);
      },
    error: ()=>{},
      complete: () => console.log('completed...'),
    });
  }

  concatObservable(){
    const obs1$ = of(1,2,3);
    const obs2$ = of(4,5,6);
    const obs3$ = of(7,8,9);

    const allObs$ = concat(obs1$, obs2$, obs3$);

    allObs$.subscribe(data => console.log(data));
  }

  toogleForm(){
    this.toggle = !this.toggle;
  }
  onSubmit(){
    const saveChanges$ = this.saveChanges(this.form.value);
    saveChanges$.pipe().subscribe(data => console.log(data));

  }

  saveChanges(change){
    return fromPromise(fetch('http://localhost:3000/courses/11', {
      method: 'PUT',
      body: JSON.stringify(change),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  )
  }

}
