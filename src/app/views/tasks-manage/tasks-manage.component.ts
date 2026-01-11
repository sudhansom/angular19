import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, signal, ViewChild } from '@angular/core';
import { ContainerComponent } from '../..//components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { UserComponent } from '../../components/user/user.component';
import { TasksComponent } from '../../components/tasks/tasks.component';
import { NewTaskComponent } from '../../components/tasks/new-task/new-task.component';
import { SlotsComponent } from '../../components/slots/slots.component';

@Component({
  selector: 'app-tasks-manage',
  imports: [ContainerComponent, HeaderComponent, UserComponent, TasksComponent, NewTaskComponent, SlotsComponent],
  templateUrl: './tasks-manage.component.html',
  styleUrl: './tasks-manage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksManageComponent implements AfterViewInit{
  id = signal('u1');
  showAddTask = signal(false);
  myName: string;
  
  @ViewChild('appNewTask') newTask: NewTaskComponent;


  ngAfterViewInit(): void {
    this.myName = this.newTask.myName;
  }


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
