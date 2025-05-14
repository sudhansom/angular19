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
      const interval$ = timer(5000, 1000);

      interval$.subscribe(val => {
        console.log('Stream 1 => ' + val)
      })

      const click$ = fromEvent(document, 'click');

      click$.subscribe(event => {
        console.log(event);

      })
  }
}
