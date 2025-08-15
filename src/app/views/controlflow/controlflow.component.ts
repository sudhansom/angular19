import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-controlflow',
  imports: [ContainerComponent, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.scss'
})
export class ControlflowComponent {
  color = 'green'
  value = 1;
  show = false;
  names = ['Bal', 'Sudhan', 'Resham', 'Biren'];

  changeColor(color: string){
    this.color = color;
  }
  changeNumber(value: number){
    this.value = value;
  }
}
