import { Component, OnInit, inject } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prototype',
  imports: [ContainerComponent],
  templateUrl: './prototype.component.html',
  styleUrl: './prototype.component.scss'
})
export class PrototypeComponent implements OnInit {
  myFun = 'prototype definition';
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    Function.prototype.toString = ()=>{
      return 'abc'
    }

    this.activeRoute.data.subscribe(data => {
      console.log('Static data in PrototypeComponent: ', data);
    })
  }


}
