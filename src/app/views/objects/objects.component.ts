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
    country: 'Nepal',
    address: {
      city: "Tanahun",
      village: "Lalim"
    }
  }
  anotherPerson:any = {};
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

  copyObject(){
    // this.anotherPerson = this.person;

    this.anotherPerson = {...this.person};
    this.anotherPerson.name = "resham";
    console.log("copied value:: ", this.anotherPerson);

    console.log("Original value:: ", this.person);

  }

}
