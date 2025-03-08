import { Component, input, output } from '@angular/core';
@Component({
  selector: 'app-each-user',
  imports: [],
  templateUrl: './each-user.component.html',
  styleUrl: './each-user.component.scss'
})
export class EachUserComponent {
  id = input.required<string>();
  name = input.required();
  image = input.required();
  clickUser = output<string>();

  get imagePath(){
    return "src/assets/images" + this.image();
  }

  onClick(){
    this.clickUser.emit(this.id());
  }
}
