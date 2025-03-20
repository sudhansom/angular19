import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksManageComponent } from './views/tasks-manage/tasks-manage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TasksManageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-management';
}
