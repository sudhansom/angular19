import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ExampleComponent } from './example/example.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hooks',
  imports: [ContainerComponent, ExampleComponent, NgIf],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.scss'
})
export class HooksComponent {
  inputValue = '';
  toBeDestroyed = true;

  onSubmit(el: HTMLInputElement){
    this.inputValue = el.value;
  }

  onDestroy(){
    this.toBeDestroyed = !this.toBeDestroyed;
  }
}
