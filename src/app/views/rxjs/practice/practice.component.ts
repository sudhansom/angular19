import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ContainerComponent } from '../../../components/container/container.component';
import { fromEvent, timer } from 'rxjs';

@Component({
  selector: 'app-practice',
  imports: [ContainerComponent, AsyncPipe],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent implements OnInit {
  ngOnInit() {
      const interval$ = timer(1000, 1000);

      const sub = interval$.subscribe(val => {
        console.log('Stream 1 => ' + val)
      })

      setTimeout(()=>{
        sub.unsubscribe();
      }, 5000)

      const click$ = fromEvent(document, 'click');

      click$.subscribe(event => {
        console.log(event);

      })
  }
}
