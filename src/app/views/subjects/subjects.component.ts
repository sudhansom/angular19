import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTasksComponent } from './show-tasks/show-tasks.component';

@Component({
  selector: 'app-subjects',
  imports: [ContainerComponent, NewTaskComponent, ShowTasksComponent],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {
}
