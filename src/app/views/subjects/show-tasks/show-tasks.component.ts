import { Component } from '@angular/core';

@Component({
  selector: 'app-show-tasks',
  imports: [],
  templateUrl: './show-tasks.component.html',
  styleUrl: './show-tasks.component.scss'
})
export class ShowTasksComponent {
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];
}
