import { Component, OnInit, inject } from '@angular/core';
import { Employee, Person } from './js-file';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prototype',
  imports: [],
  templateUrl: './prototype.component.html',
  styleUrl: './prototype.component.scss'
})
export class Prototype1Component implements OnInit {
  person = new Person('sudhan', 43, 'lalim');
  employee = new Employee('Resham', 41, 'Kathmandu', '1122', 50000);

  router: Router = inject(Router);

  ngOnInit(): void {
      console.log(this.person);
      console.log(this.employee);

      console.log(Employee.officeLocation());

      // console.log(this.router.getCurrentNavigation().extras.state);
      console.log('State:   ',history.state);
  }

}
