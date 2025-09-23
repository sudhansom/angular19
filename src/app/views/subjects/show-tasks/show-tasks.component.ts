import { Component, inject } from '@angular/core';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-show-tasks',
  imports: [],
  templateUrl: './show-tasks.component.html',
  styleUrl: './show-tasks.component.scss'
})
export class ShowTasksComponent {
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];

  taskService = inject(TaskService);

  ngOnInit(){
    this.taskService.task.subscribe((task)=>{
      this.tasks.push(task);
    });
  }
}
