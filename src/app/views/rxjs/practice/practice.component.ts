import { Component, signal } from '@angular/core';

import { ContainerComponent } from '../../../components/container/container.component';

@Component({
  selector: 'app-practice',
  imports: [ContainerComponent],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {
  counter = signal(0);

  onIncrement(){
    this.counter.update(preValue => preValue + 1);
  }

  onDecrement(){
    this.counter.update(preValue => preValue - 1);
  }
}
