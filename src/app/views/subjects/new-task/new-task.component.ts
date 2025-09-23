import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  newTask: string = '';

  taskService = inject(TaskService);

  onCreate(){
    if(this.newTask && this.newTask !== "Task added...."){
      console.log(this.newTask);
      this.taskService.onCreate(this.newTask);
      this.newTask = "Task added....";
      setTimeout(()=>{
        this.newTask = "";
      }, 1500)
    }
  }
}
