import { Routes } from '@angular/router';
import { TasksManageComponent } from './views/tasks-manage/tasks-manage.component';
import { ReactiveRegistrationComponent } from './views/reactive-registration/reactive-registration.component';
import { SeparationComponent } from './views/separation/separation.component';
import { PracticeComponent } from './views/rxjs/practice/practice.component';
import { SitemuleComponent } from './views/sitemule/sitemule.component';
import { GridComponent } from './views/grid/grid.component';
import { CssGridOnlyComponent } from './views/css-grid-only/css-grid-only.component';
import { CssBeforeComponent } from './views/css-before/css-before.component';
import { ReactiveAssignmentComponent } from './components/reactive-assignment/reactive-assignment.component';
import { JsPractiveComponent } from './views/js-practive/js-practive.component';
import { ArraysComponent } from './views/arrays/arrays.component';
import { ObservablesComponent } from './views/observables/observables.component';
import { ObjectsComponent } from './views/objects/objects.component';
import { PrototypeComponent } from './views/prototype/prototype.component';
import { Prototype1Component } from './components/prototype/prototype.component';

export const routes: Routes = [
  {path: '', component: TasksManageComponent},
  {path: 't-register', loadComponent: ()=>import('./views/user-registration/user-registration.component').then(c=>c.UserRegistrationComponent)},
  {path: 'r-register', component: ReactiveRegistrationComponent,
    children: [
      {
        path: 'example', component: ReactiveAssignmentComponent
      }
    ],
    canDeactivate: [(comp: ReactiveRegistrationComponent)=>{return comp.canExit();}]},
  { path: 'budget', loadComponent: ()=> import('./views/budget/budget.component').then(c=>c.BudgetComponent)},
  { path: 'separation', component: SeparationComponent },
  { path: 'rxjs', component: PracticeComponent},
  { path: 'grid', component: GridComponent},
  { path: 'grid-only', component: CssGridOnlyComponent},
  { path: 'css-before', component: CssBeforeComponent},

  { path: 'sitemule', component: SitemuleComponent, canActivate: [() => true]},
  { path: 'js-practice', component: JsPractiveComponent,
    children: [
      { path: 'arrays', component: ArraysComponent},
      { path: 'objects', component: ObjectsComponent},
      { path: 'prototype', component: PrototypeComponent},
      {path: 'prototype1', component: Prototype1Component},

    ]
  },
  {
    path: 'observables', component: ObservablesComponent
  },
  { path: 'ngrx', loadComponent: ()=>import('./views/ngrx/ngrx.component').then(c=>c.NgrxComponent)},
  { path: 'c-flow', loadComponent: ()=>import('./views/controlflow/controlflow.component').then(c=>c.ControlflowComponent)},
  { path: 'each-grid', loadComponent: () => import('./views/each-grid/each-grid.component').then(c=>c.EachGridComponent)},
  { path: 'observables1', loadComponent: ()=>import("./views/observables1/observables1.component").then(c=>c.Observables1Component)},
  {path: 'css-only', loadComponent: ()=>import("./views/css/css.component").then(c => c.CssComponent)},
  {path: 'subjects', loadComponent: ()=>import("./views/subjects/subjects.component").then(c=>c.SubjectsComponent)},
  { path: 'td-form', loadComponent: () => import('./views/template/template.component').then(c=>c.TemplateComponent)},
  { path: 'rt-form', loadComponent: () => import('./views/reactive-form/reactive-form.component').then(c => c.ReactiveFormComponent)},

];
