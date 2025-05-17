import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ContainerComponent } from '../../../components/container/container.component';
import { Observable, filter, timer,map } from 'rxjs';

type Course = {
  id: number,
  title: string,
  level: string
}

@Component({
  selector: 'app-practice',
  imports: [ContainerComponent, AsyncPipe],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent implements OnInit {
  beginner$ = Observable<any>
  data$ = Observable<Course[]>
  ngOnInit() {
    const http$ = createHttpObservable('http://localhost:3000/courses');

    this.data$ = http$.pipe(map(d => Object.values(d["payload"])));


    // this.beginner$ = data$.pipe(map(c => c.filter(b => b.level === 'beginner')));

    // data$.subscribe(data => {
    //   console.log(data);
    // },
    // (error)=>{console.log(error);
    // },
    // ()=>{console.log('completed')}
    // )

    function createHttpObservable(url: string){
      return Observable.create(observer => {
        fetch(url).then(response => {
          return response.json();
        }).then(data => {
          setTimeout(() => {
            observer.next(data);
            observer.complete();
          }, 1000);
        }).catch(err => {
          observer.error(err);
        })
      })
    }
  }

}
