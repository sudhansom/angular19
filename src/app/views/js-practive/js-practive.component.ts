import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-js-practive',
  imports: [RouterOutlet, ContainerComponent, RouterModule],
  templateUrl: './js-practive.component.html',
  styleUrl: './js-practive.component.scss'
})
export class JsPractiveComponent {

  dateConversion(dates: string[]){
    let result = [];

    for(let date of dates){
        let ccc = date.split('-');
        let dayMonthYear = false;

        if(ccc.length === 3){
          if( ccc[2].length === 4){
            dayMonthYear = true
          }
        }
      

        let convertedDate = date.replace(/\D/g, "");

            let year = convertedDate.slice(0,4);
            let month = convertedDate.slice(4,6);
            let day = convertedDate.slice(6, 8);
        if(dayMonthYear){
             day = convertedDate.slice(0,2);
             month = convertedDate.slice(2,4);
             year = convertedDate.slice(4, 8);
        }

        let res = `${year}/${month}/${day}`;
        result.push(res);

    console.log(result);
}
  }

  findIndexes(arr: number[], target: number){
    console.log('Given array: ', arr, 'Target: ', target);
    let result = null;
    if(!arr || arr.length < 2){
      console.log(arr);
      return [];
    }
    for(let i=0; i<arr.length - 1; i++){
      console.log('here ind', i, arr[i], arr[i] + arr[i + 1]);

      if(arr[i] + arr[i+1] === target){
        result = [i, i+1];
      }
    }
    console.log('Result is: ',result);
    return result;
  }

  callDebounce(){
    this.debounce(this.getData, 300)();

  }

  debounce = function(getData, delay){

    let timeout;
   return function(){
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      getData.apply(this, args);
    }, delay )
   }
  }

  counter = 0;
  getData = function(){
      this.counter += 1;
      console.log(`Counter Value: `, this.counter);
    }

}
