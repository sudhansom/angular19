import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ContainerComponent } from '../../../components/container/container.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-practice',
  imports: [ContainerComponent, AsyncPipe],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {
  counter = new BehaviorSubject<number>(0);

  counter$ = this.counter.asObservable();

  onIncrement(){
    // this.counter.update(preValue => preValue + 1);
    this.counter.next(this.counter.value + 1);
  }

  onDecrement(){
    // this.counter.update(preValue => preValue - 1);
    this.counter.next(this.counter.value - 1);
  }
}
