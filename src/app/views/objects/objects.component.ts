import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-objects',
  imports: [ContainerComponent],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.scss'
})
export class ObjectsComponent {
  person = {
    name: 'Sudhan',
    age: 43,
    country: 'Nepal'
  }
  name='';
  age = 0;
  country = ""

  destructureObject(){
    if(!this.name){
      this.name = this.person.name;
    }else {
      this.name = "";
    }
  }

}
