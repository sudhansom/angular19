import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-prototype',
  imports: [ContainerComponent],
  templateUrl: './prototype.component.html',
  styleUrl: './prototype.component.scss'
})
export class PrototypeComponent implements OnInit {
  myFun = 'prototype definition';

  ngOnInit() {
    Function.prototype.toString = ()=>{
      return 'abc'
    }
  }


}
