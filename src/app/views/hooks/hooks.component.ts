import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-hooks',
  imports: [ContainerComponent, ExampleComponent],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.scss'
})
export class HooksComponent {
  inputValue = '';

  onSubmit(el: HTMLInputElement){
    this.inputValue = el.value;
  }
}
