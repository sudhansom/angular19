import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { DemoComponent } from './demo.component';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [ContainerComponent, DemoComponent],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.scss'
})
export class LifeCycleHooksComponent implements DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() message: string ;
  constructor(){
    console.log('Constructor is not a life cycle hook...');
  }

  ngOnChanges(){
    console.log('OnChanges is the first hook to execute....');
  }

  ngDoCheck(){
    console.log('DoCheck hook called....')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit called in parent component....');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentInit executes once but AfterContentChecked gets called each time change detection happens')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit is called after ContentChecked ... but always only once after the view is initialized.')
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked is called after ViewInit and is called everytime when CD is triggered.')
  }


}
