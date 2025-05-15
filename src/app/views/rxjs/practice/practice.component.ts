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
    const data$ = Observable.create(observer => {
      fetch('http://localhost:3000/posts').then(response => {
        return response.json();
      }).then(data => {
        observer.next(data);
        observer.complete();
      }).catch(err => {
        observer.error(err);
      })
    })

    data$.pipe(map(d => d["payload"])).subscribe(data => {
      console.log(data);
    })
  }

}
