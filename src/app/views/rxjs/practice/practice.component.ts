import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ContainerComponent } from '../../../components/container/container.component';
import { Observable, fromEvent, timer,map } from 'rxjs';

@Component({
  selector: 'app-practice',
  imports: [ContainerComponent, AsyncPipe],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent implements OnInit {
  ngOnInit() {
    const http$ = createHttpObservable('http://localhost:3000/courses');

    const data$ = http$.pipe(map(d => d["payload"]));

    data$.subscribe(data => {
      console.log(data);
    },
    (error)=>{console.log(error);
    },
    ()=>{console.log('completed')}
    )

    function createHttpObservable(url: string){
      return Observable.create(observer => {
        fetch(url).then(response => {
          return response.json();
        }).then(data => {
          observer.next(data);
          observer.complete();
        }).catch(err => {
          observer.error(err);
        })
      })
    }
  }

}
