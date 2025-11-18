import { Component, computed, signal } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-signals',
  imports: [ContainerComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  counter = signal(0);

  derivedCounter = computed(()=>{
    let cnt = this.counter() * 10;
    return cnt;
  })

  handleCounter(action: string){
    if(action === 'increase'){
      this.counter.update(val => val + 1);
    }else {
      this.counter.update(val => val - 1);
    }
  }
}
