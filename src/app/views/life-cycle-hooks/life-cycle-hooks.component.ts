import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { DemoComponent } from './demo.component';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [ContainerComponent, DemoComponent],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.scss'
})
export class LifeCycleHooksComponent {

  @Input() message: string ;
  constructor(){
    console.log('Constructor is not a life cycle hook...');
  }

  ngOnChanges(){
    console.log('OnChanges is the first hook to execute....');
  }
}
