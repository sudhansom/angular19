import { Routes } from '@angular/router';
import { TasksManageComponent } from './views/tasks-manage/tasks-manage.component';
import { UserRegistrationComponent } from './views/user-registration/user-registration.component';
import { ReactiveRegistrationComponent } from './views/reactive-registration/reactive-registration.component';
import { BudgetComponent } from './views/budget/budget.component';
import { SeparationComponent } from './views/separation/separation.component';
import { PracticeComponent } from './views/rxjs/practice/practice.component';
import { SitemuleComponent } from './views/sitemule/sitemule.component';
import { GridComponent } from './views/grid/grid.component';

export const routes: Routes = [
  {path: '', component: TasksManageComponent},
  {path: 't-register', component: UserRegistrationComponent},
  {path: 'r-register', component: ReactiveRegistrationComponent, canDeactivate: [(comp: ReactiveRegistrationComponent)=>{return comp.canExit();}]},
  {path: 'budget', component: BudgetComponent},
  { path: 'separation', component: SeparationComponent },
  { path: 'rxjs', component: PracticeComponent},
  { path: 'grid', component: GridComponent},
  { path: 'sitemule', component: SitemuleComponent, canActivate: [() => true]},


];
