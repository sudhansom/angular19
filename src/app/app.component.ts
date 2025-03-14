import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NewTaskComponent } from './components/tasks/new-task/new-task.component';
import { type Task } from './components/tasks/tasks.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContainerComponent, HeaderComponent, UserComponent, TasksComponent, NewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-management';
  id = signal('u1');
  showAddTask = signal(false);


  onClickUser(id: string){
    this.id.set(id);
  }

  toogleAddTask(){
    this.showAddTask.set(!this.showAddTask());
  }

  onAddTask(task: Task){
    alert(task.title);
  }
}
