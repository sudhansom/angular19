import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-controlflow',
  imports: [ContainerComponent, NgIf],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.scss'
})
export class ControlflowComponent {
  color = 'green'
  value = 1;
  show = true;

  changeColor(color: string){
    this.color = color;
  }
  changeNumber(value: number){
    this.value = value;
  }
}
