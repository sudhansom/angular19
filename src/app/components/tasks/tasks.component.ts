import { Component, inject } from '@angular/core';
import { EachTaskComponent } from './each-task/each-task.component';
import { DataServiceService } from '../../services/data-service.service';
import { type Task } from './tasks.model';

@Component({
  selector: 'app-tasks',
  imports: [ EachTaskComponent ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
dataService = inject(DataServiceService)
tasks: Task[] = [];
constructor(){
  this.tasks = this.dataService.getTasks();
}
}
