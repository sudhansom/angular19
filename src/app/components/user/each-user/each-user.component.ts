import { Component, input } from '@angular/core';
@Component({
  selector: 'app-each-user',
  imports: [],
  templateUrl: './each-user.component.html',
  styleUrl: './each-user.component.scss'
})
export class EachUserComponent {
  id = input.required();
  name = input.required();
  image = input.required();

  get imagePath(){
    return "src/assets/images" + this.image();
  }
}
