import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { ContainerComponent } from '../../container/container.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [ContainerComponent, CardComponent, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
id = '';
title = '';
desc = '';
user = '';

addTask(){
  console.log(this.id, this.title, this.desc, this.user);
}
}
