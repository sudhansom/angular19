import { Component, OnInit } from '@angular/core';
import { Employee, Person } from './js-file';

@Component({
  selector: 'app-prototype',
  imports: [],
  templateUrl: './prototype.component.html',
  styleUrl: './prototype.component.scss'
})
export class Prototype1Component implements OnInit {
  person = new Person('sudhan', 43, 'lalim');
  employee = new Employee('Resham', 41, 'Kathmandu', '1122', 50000);

  ngOnInit(): void {
      console.log(this.person);
      console.log(this.employee);

      console.log(Employee.officeLocation());
  }

}
