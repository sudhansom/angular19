import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ExampleComponent } from './example/example.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hooks',
  imports: [ContainerComponent, ExampleComponent, NgIf],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.scss'
})
export class HooksComponent implements OnInit, OnChanges, DoCheck {
  inputValue = '';
  toBeDestroyed = true;

  onSubmit(el: HTMLInputElement){
    this.inputValue = el.value;
  }

  onDestroy(){
    this.toBeDestroyed = !this.toBeDestroyed;
  }

  ngOnInit(): void {
    console.log('Hoods main: onInit ')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hooks main... onChanges...')
  }

  ngDoCheck(): void {
    console.log('Hooks main... DoCheck...')
  }
}
