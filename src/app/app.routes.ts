import { Routes } from '@angular/router';
import { TasksManageComponent } from './views/tasks-manage/tasks-manage.component';
import { UserRegistrationComponent } from './views/user-registration/user-registration.component';

export const routes: Routes = [
  {path: '', component: TasksManageComponent},
  {path: 'register', component: UserRegistrationComponent}
];
