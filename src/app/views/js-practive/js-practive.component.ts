import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-js-practive',
  imports: [ContainerComponent],
  templateUrl: './js-practive.component.html',
  styleUrl: './js-practive.component.scss'
})
export class JsPractiveComponent {
  myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  randomItem: number = null;

  slicedArray = [];
  sArray = [];

  sliceArray(a: number, b: number){
    this.slicedArray = this.myArray.slice(a, b);
  }

  spreadArray() {
    this.sArray = [ ...this.myArray ];
  }

  findRandomItem() {
    this.randomItem = this.myArray[Math.floor(Math.random()*this.myArray.length)];
  }
}
