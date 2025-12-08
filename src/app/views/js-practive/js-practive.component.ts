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

}
