import { Component, OnInit } from '@angular/core';
import { Person } from './js-file';

@Component({
  selector: 'app-prototype',
  imports: [],
  templateUrl: './prototype.component.html',
  styleUrl: './prototype.component.scss'
})
export class Prototype1Component implements OnInit {
  person = new Person('sudhan', 43, 'lalim');

  ngOnInit(): void {
      console.log(this.person);
  }

}
