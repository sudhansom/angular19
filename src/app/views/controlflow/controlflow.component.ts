import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflow',
  imports: [ContainerComponent, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle,FormsModule],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.scss'
})
export class ControlflowComponent {
  color = 'green'
  value = 1;
  show = false;
  names = ['Bal', 'Sudhan', 'Resham', 'Biren'];
  switch = false;
  switch1 = false;
  dropdown = "";
  range=0;

  changeColor(color: string){
    this.color = color;
  }
  changeNumber(value: number){
    this.value = value;
  }
  toogleFlow(val: string){
    if(val === 'switch'){
      this.switch = !this.switch;
    }
    else{
      this.switch1 = !this.switch1;
    }
  }
}
