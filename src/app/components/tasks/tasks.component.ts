import { Component } from '@angular/core';
import { EachTaskComponent } from './each-task/each-task.component';

@Component({
  selector: 'app-tasks',
  imports: [ EachTaskComponent ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

}
