import { Component, OnInit } from '@angular/core';
import { Observable, Subject, concatMap, debounceTime, filter, from, fromEvent, map } from 'rxjs';
import { ContainerComponent } from '../../components/container/container.component';
import { AsyncPipe } from '@angular/common';

import { createHttpsObservable } from '../../utils/utils';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-observables',
  imports: [ContainerComponent, AsyncPipe, ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent implements OnInit {
  form: FormGroup;
  name$ = new Subject();
  counter$ = new Subject();

  ngOnInit(){
      this.form = new FormGroup({
        title: new FormControl(''),
        level: new FormControl('')
      })

      this.form.valueChanges.pipe(
        filter(()=>this.form.valid),
        debounceTime(400),
        concatMap(changes => this.saveChanges(changes))).subscribe(response => {
          console.log('saved....', response)

      });
  }

  saveChanges(changes){
    return fromPromise(fetch('http://localhost:3000/course/1', {
      method: 'PUT',
      body: JSON.stringify(changes),
      headers: {
        'content-type': 'application/json'
      }
    }));
  }

  onFormSubmit(){
    console.log('form submitted   ', this.form.value)
  }


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
  createObservable1(){
    const http$ = createHttpsObservable('http://localhost:3000/courses');
    const courses$ = http$.pipe(map(response => response['payload']));
    courses$.subscribe(console.log);

}

createObsfrom(){
  from([1,2,3,4,5]).subscribe(value => console.log(value));
  fromEvent<MouseEvent>(document, 'click').subscribe(event => console.log(event.type, event.x, event.y));
}

}
