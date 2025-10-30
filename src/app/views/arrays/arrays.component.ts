import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-arrays',
  imports: [ContainerComponent, NgIf, RouterModule],
  templateUrl: './arrays.component.html',
  styleUrl: './arrays.component.scss'
})
export class ArraysComponent {
  myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr1 = [1, 2, 3, [4, 5, [6, 7]]]
  randomItem: number = null;
  closureResult = null;
  joinArr = "";

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
  closure(){
    let x = 0;
    return (y: number) => {
      x += 1;
      return x + y;
    }
  }
  myClosure = this.closure();

  joinArray(){
    this.joinArr = this.myArray.join("");
  }
}
