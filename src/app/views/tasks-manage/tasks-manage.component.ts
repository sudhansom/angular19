import { Component, signal } from '@angular/core';
import { ContainerComponent } from '../..//components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { UserComponent } from '../../components/user/user.component';
import { TasksComponent } from '../../components/tasks/tasks.component';
import { NewTaskComponent } from '../../components/tasks/new-task/new-task.component';

@Component({
  selector: 'app-tasks-manage',
  imports: [ContainerComponent, HeaderComponent, UserComponent, TasksComponent, NewTaskComponent],
  templateUrl: './tasks-manage.component.html',
  styleUrl: './tasks-manage.component.scss'
})
export class TasksManageComponent {
  id = signal('u1');
  showAddTask = signal(false);


  onClickUser(id: string){
    this.id.set(id);
  }

  toogleAddTask(){
    this.showAddTask.set(!this.showAddTask());
  }
  onCompleteTask(id: string){
    console.log('task completed::  '+id);
  }
}
