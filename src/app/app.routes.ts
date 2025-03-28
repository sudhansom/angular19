import { Routes } from '@angular/router';
import { TasksManageComponent } from './views/tasks-manage/tasks-manage.component';
import { UserRegistrationComponent } from './views/user-registration/user-registration.component';
import { ReactiveRegistrationComponent } from './views/reactive-registration/reactive-registration.component';

export const routes: Routes = [
  {path: '', component: TasksManageComponent},
  {path: 't-register', component: UserRegistrationComponent},
  {path: 'r-register', component: ReactiveRegistrationComponent}
];
