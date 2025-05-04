import { Component, OnInit, inject, input, output, signal } from '@angular/core';
import { EachTaskComponent } from './each-task/each-task.component';
import { DataServiceService } from '../../services/data-service.service';
import { type Task } from './tasks.model';

@Component({
  selector: 'app-tasks',
  imports: [ EachTaskComponent ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  id = input<string>();
  complete = output<string>()
  dataService = inject(DataServiceService)
  tasks = signal<Task[]>([]);


  ngOnInit(){
    this.tasks.set(this.dataService.getTasks());
  }

  get userId(){
    return this.id();
  }

  get userTasks(){
    return this.tasks().filter(t => t.user === this.userId)
  }

  onCompleteTask(id: string){
    this.tasks.set(this.tasks().filter(t => t.id != id));
    this.complete.emit(id);
  }

}
