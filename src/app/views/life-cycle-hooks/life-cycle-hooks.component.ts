import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [ContainerComponent],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.scss'
})
export class LifeCycleHooksComponent {
  constructor(){
    console.log('Constructor is not a life cycle hook...');
  }
}
